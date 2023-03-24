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

  <section>
    <img src="../imgs/morgan-lane-BEF-7cpER3s-unsplash.jpg" alt="USMap" class="mapImg">
    <form @submit.prevent="handleSubmit">
      <div class="formZip form-floating mb-3">
        <input 
          class="form-control" 
          id="floatingInput" 
          placeholder="ZIP code"
          required
          v-model="zip"
        >
        <label for="floatingInput">Please, enter your ZIP code</label>
      </div>
      <button type="submit" class="submitBtn btn btn-primary">Find</button>
    </form>
  </section>
  <footer class="footer">
    <h1 class="footerText">Any intel for reasonable price - your privacy</h1>
  </footer>
</template>

<style>
.header {
  height: 15vh;
  background-color: #252525;
  width: 100%;
  text-align: center;
  box-shadow: 0px 8px 8px 0px #00000040;
  margin: 0;
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

.heading {
  line-height: 15vh;
  color: #fff;
  font-size: 44px;
  margin: 0;
}

.formZip {
  position: absolute;
  top: 60%;
  left: 50%;
  width: 30%;
  height: 5vh;

  transform: translate(-50%);
}

.submitBtn {
  position: absolute;
  top: 72%;
  left: 50%;

  width: 15%;

  transform: translate(-50%);
}

.mapImg {
  height: 75vh;
  width: 100%;
  object-fit: cover;
}
</style>
