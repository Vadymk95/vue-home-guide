<template>
  <header class="header">
    <p class="titles-group">
      <h1 class="title-top">RION-T</h1>
      <h4 class="title-bottom">construction co.</h4>
    </p>
    <navbar />
    <p class="header__link"><router-link class="header__router-link" to="/auth/signin">Sign In</router-link></p>
  </header>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue';
export default { components: { Navbar } };
</script>

<style scoped>
.header {
  position: relative;
  margin-bottom: 15px;
}

.header__link {
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(255,255,255, 0.5);
  padding: 8px;
  border-radius: 8px;
}

.header__router-link {
  text-decoration: none;
  color: teal;
}
.titles-group {
  color: #eaeaea;
  margin-bottom: 40px;
  text-align: center;
  border-radius: 8px;
}

.title-top {
  text-transform: uppercase;
  font-size: 50px;
}

.title-bottom {
  color: #fff;
}
</style>
