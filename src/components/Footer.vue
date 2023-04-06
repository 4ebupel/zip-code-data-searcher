<template>
  <footer class="footer">
    <h1 class="footerText">Any intel for reasonable price - your privacy</h1>
  </footer>
</template>

<style>
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

@media (max-width: 960px) {
  .footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  
  .footerText {
    font-size: 12px;
  }
}
</style>
