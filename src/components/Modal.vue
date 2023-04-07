<script>
import Loader from './Loader.vue';
import { getIp } from '../api/zipInfo';

export default {
  components: {
    Loader,
  },

  data() {
    return {
      ip: {},
      info: '',
      isLoading: true,
    }
  },

  async mounted() {
    await getIp()
      .then(({ data }) => {
        this.ip = data;
      });
    // await getOtherData()
    //   .then(({ data }) => {
    //     this.info = data;
    //   });
    this.isLoading = false;
  }
}
</script>

<template>
  <Loader v-if="isLoading"/>
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true"  v-else>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">IP and other data</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Your IP: {{ ip.ip }}</li>
            <li class="list-group-item">Your city: {{ ip.city }}</li>
            <li class="list-group-item">Your region: {{ ip.region }}</li>
            <li class="list-group-item">Your country: {{ ip.country }}</li>
            <li class="list-group-item">Your ISP: {{ ip.org }}</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>