<template>
  <div class="app">
    <post-header />
    <router-view />
  </div>
</template>

<script lang="ts">
import PostHeader from './components/PostHeader.vue';
export default { components: { PostHeader } };
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

html {
  height: 100vh;
}

body {
  background-color: #eaeaea;
}

.app {
  background-color: #fff;
  height: 100%;
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
