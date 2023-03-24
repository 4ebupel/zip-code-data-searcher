<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },

  data() {
    return {
      zip: ''
    }
  },
  emits: ['change'],
  methods: {
    handleSubmit() {
      this.$emit('change', this.zip);
      this.zip = '';
    }
  }
}
</script>

<template>
  <Header :innerText="`ZIP code info searcher`" />

  <section class="backgroundImgSection">
    <form @submit.prevent="handleSubmit" class="homeForm">
      <div class="form-floating mb-3">
        <input 
          class="form-control" 
          id="floatingInput" 
          placeholder="ZIP code"
          required
          maxlength="5"
          v-model="zip"
        >
        <label for="floatingInput">Please, enter your ZIP code</label>
      </div>
      <button type="submit" class="btn btn-primary homeFormBtn">Find</button>
    </form>
  </section>
  <footer class="footer">
    <h1 class="footerText">Any intel for reasonable price - your privacy</h1>
  </footer>
</template>

<style>
.backgroundImgSection {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 64px;

  height: 75vh;
  background-image: url('../imgs/morgan-lane-BEF-7cpER3s-unsplash.jpg');
  background-size: 100%;
  background-position: center;
}

.homeForm {
  display: flex;
  flex-direction: column;
  width: 25%;
}

.homeFormBtn {
  width: 40%;
  align-self: center;
}

.footer {
  height: 10vh;
  background-color: #252525;
  width: 100%;
  text-align: center;
}

.footerText {
  line-height: 10vh;
  font-size: 20px;
  color: #767676;
  margin: 0;
}
</style>
