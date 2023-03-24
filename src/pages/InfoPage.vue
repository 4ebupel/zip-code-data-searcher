<script>
import { getInfo } from '../api/zipInfo';
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      info: {
        // "request": {
        //   "type": "Zipcode",
        //   "query": "36525",
        //   "language": "en",
        //   "unit": "m"
        // },
        // "location": {
        //   "name": "Creola",
        //   "country": "USA",
        //   "region": "Alabama",
        //   "lat": "30.889",
        //   "lon": "-88.026",
        //   "timezone_id": "America/Chicago",
        //   "localtime": "2023-03-23 16:28",
        //   "localtime_epoch": 1679588880,
        //   "utc_offset": "-5.0"
        // },
        // "current": {
        //   "observation_time": "09:28 PM",
        //   "temperature": 26,
        //   "weather_code": 116,
        //   "weather_icons": [
        //     "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
        //   ],
        //   "weather_descriptions": [
        //     "Partly cloudy"
        //   ],
        //   "wind_speed": 22,
        //   "wind_degree": 170,
        //   "wind_dir": "S",
        //   "pressure": 1021,
        //   "precip": 0,
        //   "humidity": 58,
        //   "cloudcover": 75,
        //   "feelslike": 29,
        //   "uv_index": 5,
        //   "visibility": 16,
        //   "is_day": "yes"
        // }
      },
      errorStatus: false,
      isLoading: false,
      isWeather: !this.errorStatus,
    }
  },
  props: {
    zip: String,
  },
  mounted() {
    getInfo(this.zip)
      .then(({ data }) => {
        this.info = data;
      });
  }
}
</script>

<template>
  <Header :innerText="`Your data & weather report`" />
  <section v-if="!isLoading" class="background">
    <h1 v-if="isLoading">Wait a sec...</h1>
    <div class="card" style="width: 18rem;" v-if="!errorStatus">
      <div class="card-body">
        <h5 class="card-title">Your City is: {{ info.location.name.split(',')[0] }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">More data</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Your contry is: {{ info.location.country.split(',')[4] }}</li>
          <li class="list-group-item">Your state is: {{ info.location.region.split(',')[2] }}</li>
          <li class="list-group-item">Your ZIP code is: {{ info.location.country.split(',')[3] }}</li>
        </ul>
        <a href="/" class="btn btn-dark">Home</a>
        <a href="#" class="btn btn-dark">Toggle weather</a>
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
  height: 85vh;
  background-image: url('../imgs/jude-infantini-mI-QcAP95Ok-unsplash.jpg');
  object-fit: fill;
  background-position: center;
}

.btn {
  margin-right: 8px;
}
</style>
