<template>
  <div class="app">
    <product-header />
    <router-view />
  </div>
</template>

<script lang="ts">
import ProductHeader from './components/ProductHeader.vue';
export default { components: { ProductHeader } };
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background-image: url('./assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-position:center center;
  background-size: cover;
  background-attachment: fixed;
  background-color: #c7b39b;
  color: #fff;
}

.app {
  height: 100%;
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
  background-color: rgba(0,0,0, 0.4);
}
</style>
