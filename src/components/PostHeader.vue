<template>
  <header class="header">
    <hgroup class="titles-group">
      <h1 class="title-top">An interesting project about posts</h1>
      <h4 class="title-bottom">created by Vue3</h4>
    </hgroup>
    <navbar />
  </header>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
export default { components: { Navbar } };
</script>

<style scoped>
.header {
  margin-bottom: 15px;
}
.titles-group {
  color: #707070;
  margin-bottom: 40px;
  text-align: center;
}

.title-top {
  text-transform: uppercase;
}

.title-bottom {
  color: #303030;
}
</style>
