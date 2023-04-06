<script>
  export default {
    props: {
      innerText: String,
    }
  }
</script>

<template>
  <header class="header">
    <h1 class="heading">{{ innerText }}</h1>
  </header>
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

.heading {
  line-height: 15vh;
  color: #fff;
  font-size: 44px;
  margin: 0;
}

@media (max-width: 960px) {
  .header {
    height: 10vh;
  }

  .heading {
    font-size: 26px;
    line-height: 10vh;
  }
}
</style>
