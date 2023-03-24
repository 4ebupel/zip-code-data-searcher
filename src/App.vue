<script>
import HomePage from './pages/HomePage.vue';
import InfoPage from './pages/InfoPage.vue';
import { getInfo } from './api/zipInfo';

export default {
  components: {
    HomePage,
    InfoPage,
  },
  data() {
    return {
      zip: '',
      info: '',
      errorStatus: false,
    }
  },
  computed: {
    isZipValid() {
      return Boolean(Number(this.zip));
    }
  },
  watch: {
    zip() {
      getInfo(this.zip)
        .then(({ data }) => {
          this.info = data;
        });
    }
  }
}
</script>

<template>
  <HomePage @change="zip = $event" v-if="!isZipValid" />
  <InfoPage :info="info" v-else-if="isZipValid && info" />
</template>

<style></style>
