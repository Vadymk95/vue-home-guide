<template>
  <div class="post-list">
    <div v-if="posts.length > 0" class="post-list__content">
      <h3 class="post-list__title">List of Posts</h3>
      <post
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post.id)"
      />
    </div>
    <h2 v-else class="post-list__empty-title">The list of posts is empty</h2>
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

.post-list__empty-title {
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
