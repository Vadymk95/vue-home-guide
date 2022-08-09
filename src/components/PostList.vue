<template>
  <div class="post-list">
    <div v-if="posts.length > 0" class="post-list__content">
      <h3 class="post-list__title">List of Posts</h3>
      <transition-group name="list" tag="div">
        <post
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post.id)"
        />
      </transition-group>
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

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.list-move {
  transition: transform 0.8s ease;
}

</style>
