<template>
  <header class="header">
    <p class="titles-group">
      <h1 class="title-top">RION-T</h1>
      <h4 class="title-bottom">construction co.</h4>
    </p>
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
  color: #eaeaea;
  margin-bottom: 40px;
  text-align: center;
}

.title-top {
  text-transform: uppercase;
  font-size: 50px;
}

.title-bottom {
  color: #fff;
}
</style>
