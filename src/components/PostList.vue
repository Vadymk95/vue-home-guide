<template>
  <div class="post-list">
    <h3 class="post-list__title">List of Posts</h3>
    <post v-for="post in posts" :post="post" />
  </div>
</template>

<script lang="ts">
import Post from './Post.vue';
export default {
  components: {
    Post,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list__title {
  margin-bottom: 10px;
}
</style>
