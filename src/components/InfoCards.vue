<script>
import Header from './Header.vue';
import Loader from './Loader.vue';
import Modal from './Modal.vue';
import { getInfo } from '../api/zipInfo';

export default {
  components: {
    Header,
    Loader,
    Modal,
  },
  data() {
    return {
      isLoading: true,
      info: {},
    }
  },
  props: {
    zip: '',
  },
  async mounted() {
    await getInfo(this.zip)
      .then(({ data }) => {
        this.info = data;
      });
    this.isLoading = false;
  }
}
</script>

<template>
  <section class="background">
    <Loader v-if="isLoading" />
    <div class="card" style="width: 18rem;" v-if="info && !isLoading">
      <div class="card-body">
        <h5 class="card-title">Your City is: {{ info.location.name.split(',')[0] }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">More data</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Your contry is: {{ info.location.name.split(',')[4] }}</li>
          <li class="list-group-item">Your state is: {{ info.location.name.split(',')[2] }}</li>
          <li class="list-group-item">Your ZIP code is: {{ info.location.name.split(',')[3] }}</li>
        </ul>
        <a href="/" class="btn btn-dark">Home</a>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
          IP LookUp
        </button>
      </div>
      <div class="card-footer">
        <small class="text-muted">Observation time: {{ info.timelines.daily[0].time }}</small>
      </div>
    </div>
    <Modal />
    <div class="card" v-if="info && !isLoading">
      <div class="card-header">Temperature in {{ info.location.name.split(',')[0] }} °C</div>
      <div class="card-body">
        <div class="row">
          <div v-for="(day, index) in info.timelines.daily" :key="index" class="col text-center">
            <div>{{ day.time.split('T')[0].split('-')[2] }}</div>
            <div>{{ day.values.temperatureApparentAvg }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.background {
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 24px;
  justify-content: center;
  align-items: flex-start;
  height: 75vh;
  background-image: url('../imgs/jude-infantini-mI-QcAP95Ok-unsplash.jpg');
  object-fit: fill;
  background-position: center;
}

.card {
  align-self: center;
}

.btn {
  margin-right: 8px;
}
</style>
