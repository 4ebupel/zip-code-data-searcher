<script>
import Header from './Header.vue';
import Loader from './Loader.vue';

export default {
  components: {
    Header,
    Loader,
  },
  data() {
    return {
      errorStatus: false,
      isLoading: false,
    }
  },
  props: {
    info: '',
  }
}
</script>

<template>
  <!-- <Header :innerText="`Your data & weather report`" /> -->
  <h1 v-if="isLoading">Wait a sec...</h1>
  <section v-if="!isLoading" class="background">
    <Loader v-if="!info"/>
    <div class="card" style="width: 18rem;" v-if="info">
      <div class="card-body">
        <h5 class="card-title">Your City is: {{ info.location.name.split(',')[0] }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">More data</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Your contry is: {{ info.location.name.split(',')[4] }}</li>
          <li class="list-group-item">Your state is: {{ info.location.name.split(',')[2] }}</li>
          <li class="list-group-item">Your ZIP code is: {{ info.location.name.split(',')[3] }}</li>
        </ul>
        <a href="/" class="btn btn-dark">Home</a>
      </div>
      <div class="card-footer">
        <small class="text-muted">Observation time: {{ info.timelines.daily[0].time }}</small>
      </div>
    </div>
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;" v-if="errorStatus">
      <div class="card-header">Error</div>
      <div class="card-body">
        <h5 class="card-title">Something went wrong</h5>
        <p class="card-text">Reload the page or try again later if it won't help - contact us at: supportExample@gmail.com
        </p>
        <a href="/" class="btn btn-dark">Home</a>
      </div>
    </div>
  </section>
</template>

<style>
.background {
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: flex-start;
  align-items: center;
  height: 75vh;
  background-image: url('../imgs/jude-infantini-mI-QcAP95Ok-unsplash.jpg');
  object-fit: fill;
  background-position: center;
}

.btn {
  margin-right: 8px;
}
</style>
