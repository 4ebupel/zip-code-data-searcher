<script>
import Form from './components/Form.vue';
import InfoCard from './components/InfoCard.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { getInfo } from './api/zipInfo';

export default {
  components: {
    Form,
    InfoCard,
    Header,
    Footer,
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
  <Header :innerText="`ZIP code info searcher`" v-if="!info"/>
  <Header :innerText="`Your data & weather report`" v-else/>
  <Form @change="zip = $event" v-if="!isZipValid" />
  <InfoCard :info="info" v-else />
  <Footer />
</template>

<style></style>
