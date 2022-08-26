<template>
  <nav class="nav">
    <router-link class="nav__link" to="/">Home</router-link>
    <router-link class="nav__link" to="/products">Products</router-link>
    <router-link class="nav__link" to="/about">About Us</router-link>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  gap: 30px;
  padding: 10px;
  justify-content: flex-end;
}

.nav__link {
  text-decoration: none;
  font-weight: 700;
  color: #fff;
}

.nav__link:hover {
  text-decoration: underline;
}
</style>
