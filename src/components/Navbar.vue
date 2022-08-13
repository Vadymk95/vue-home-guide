<template>
  <nav class="nav">
    <router-link class="nav__link" to="/">Home</router-link>
    <router-link class="nav__link" to="/posts">Posts</router-link>
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
  background-color: #eaeaea;
  padding: 10px;
  box-shadow: 2px 2px 4px gray;
}

.nav__link {
  text-decoration: none;
  font-weight: 700;
  color: lightseagreen;
}

.nav__link:hover {
  text-decoration: underline;
}
</style>
