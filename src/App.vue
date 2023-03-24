<script>
import HomePage from './pages/HomePage.vue';
import InfoPage from './pages/InfoPage.vue';

export default {
  components: {
    HomePage,
    InfoPage,
  },
  data() {
    return {
      zip: '',
    }
  },
  computed: {
    isZipValid() {
      return this.zip.length === 5 && Boolean(Number(this.zip));
    }
  },
}
</script>

<template>
  <HomePage @change="zip = $event" v-if="!isZipValid"/>
  <InfoPage :zip="zip" v-else-if="isZipValid"/>
</template>

<style></style>
