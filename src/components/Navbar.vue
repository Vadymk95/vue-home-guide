import store from '@/store';
<template>
  <div class="navbar">
    <div class="rating">
      <span class="rating__text">Rate us!</span>
      <custom-button variant="primary" @click="$store.commit('decreaseRating')">down</custom-button>
      <span class="rating__rate">{{ $store.state.rating }}</span>
      <custom-button variant="primary" @click="$store.commit('increaseRating')">up</custom-button>
      <span class="rating__ads">from 0 to 5</span>
    </div>
    <nav class="nav">
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/products">Products</router-link>
      <router-link class="nav__link" to="/about">About Us</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import CustomButton from '@/components/UI/CustomButton.vue';
export default { components: { CustomButton } };
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rating {
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid teal;
  padding: 15px;
  display: flex;
  align-items: center;
}

.rating__ads {
  position: absolute;
  bottom: 0;
  right: 15px;
  font-size: 10px;
}
.rating__text {
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 15px;
}
.rating__rate {
  margin: 0 10px;
  font-size: 36px;
  color: teal;
}
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
