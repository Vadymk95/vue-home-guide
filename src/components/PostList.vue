<template>
  <div class="post" v-for="post in posts">
    <div class="post__block">
      <strong class="post__title">Title:</strong>
      <span>{{ post.title }}</span>
    </div>
    <div class="post__block">
      <strong class="post__title">Description:</strong>
      <span>{{ post.body }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 20px;
  margin-bottom: 20px;
  color: #fff;
  border-radius: 8px;
  border: 2px solid lightskyblue;
  background-color: darkcyan;
}

.post:hover {
  box-shadow: 0 0 5px #707070;
  border-color: darkcyan;
  transition: all 0.3s;
}

.post:last-child {
  margin-bottom: 0;
}

.post__block {
  margin-bottom: 24px;
}

.post__block:last-child {
  margin-bottom: 0;
}

.post__title {
  margin-right: 10px;
  letter-spacing: 1px;
}
</style>
