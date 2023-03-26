<script>
import Header from './Header.vue';

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
  <section class="backgroundImgSection">
    <form @submit.prevent="handleSubmit" class="homeForm">
      <div class="form-floating mb-3">
        <input 
          class="form-control" 
          id="floatingInput" 
          placeholder="ZIP code"
          required
          minlength="5"
          maxlength="5"
          v-model="zip"
        >
        <label for="floatingInput">Please, enter your ZIP code</label>
      </div>
      <button type="submit" class="btn btn-primary homeFormBtn">Find</button>
    </form>
  </section>
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
</style>
