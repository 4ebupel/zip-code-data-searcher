<script>
import Form from './components/Form.vue';
import InfoCards from './components/InfoCards.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Form,
    InfoCards,
    Header,
    Footer,
  },
  data() {
    return {
      zip: '',
    }
  },
  computed: {
    isZipValid() {
      return Boolean(Number(this.zip));
    }
  },
}
</script>

<template>
  <Header :innerText="`ZIP code info searcher`" v-if="!info"/>
  <Header :innerText="`Your data & weather report`" v-else/>
  <Form @change="zip = $event" v-if="!isZipValid" />
  <InfoCards :zip="zip" v-else />
  <Footer />
</template>

<style></style>
