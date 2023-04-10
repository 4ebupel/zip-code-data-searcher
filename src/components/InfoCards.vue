<script>
import Header from './Header.vue';
import Loader from './Loader.vue';
import Modal from './Modal.vue';
import { getLocationInfo, getWeatherInfo } from '../api/zipInfo';

export default {
  components: {
    Header,
    Loader,
    Modal,
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      info: {},
      weather: []
    }
  },
  props: {
    zip: '',
  },
  async mounted() {
    try {
      await getLocationInfo(this.zip)
        .then(({ data }) => {
          this.info = data;
        });

      await getWeatherInfo(this.zip)
        .then(({ data }) => {
          this.weather = data.data[0];
        });
      console.log(this.weather);
      this.isLoading = false;
    } catch (error) {
      this.isError = true;
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    handleBackToHome() {
      window.location.replace(
        'https://4ebupel.github.io/zip-code-data-searcher/',
      );
    }
  }
}
</script>

<template>
  <section class="background">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="isError">
      <strong>Oooopsie!</strong> Looks like some of our services are broken. Please check your zip code input or try again later.
      <button type="button" class="btn-close" @click="handleBackToHome" data-bs-dismiss="alert" aria-label="Close" />
    </div>
    <Loader v-if="isLoading" />
    <div class="card" style="width: 18rem;" v-if="info && !isLoading && !isError">
      <div class="card-body">
        <h5 class="card-title">Your City is: {{ info.places[0]['place name'] }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">More data</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Your contry is: {{ info.country }}</li>
          <li class="list-group-item">Your state is: {{ info.places[0].state }}</li>
          <li class="list-group-item">Your ZIP code is: {{ info['post code'] }}</li>
        </ul>
        <button @click="handleBackToHome" class="btn btn-dark">Home</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
          IP LookUp
        </button>
      </div>
    </div>
    <Modal />
    <div class="card" v-if="info && weather && !isLoading && !isError">
      <div class="card-body weather--card">
        <h5 class="card-title">Weather in {{ info.places[0]['place name'] }}</h5>
        <img :src="`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`" class="icon" />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Temperature is: {{ weather.temp }} °C</li>
          <li class="list-group-item">Feels like: {{ weather.app_temp }} °C</li>
          <li class="list-group-item">Wind speed: {{ weather.wind_spd }} m/s</li>
          <li class="list-group-item">Wind direction: {{ weather.wind_cdir_full }}</li>
        </ul>
      </div>
      <div class="card-footer">
        <small class="text-muted">Observation time: {{ weather.ob_time }}</small>
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

.weather--card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.btn {
  margin-right: 8px;
}

.icon {
  display: block;
  width: 60%;
}

@media (max-width: 960px) {
  .background {
    flex-direction: column;

    min-height: 80vh;

    height: fit-content;

    background-repeat: no-repeat;
    background-size: cover;
  }

  .icon {
    display: block;
    width: 50%;
  }
}
</style>
