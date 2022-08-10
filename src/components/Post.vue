<template>
  <div class="post">
    <div class="post__body">
      <h2 class="post__header">Post {{post.id}}</h2>
      <div class="post__block">
        <strong class="post__title">Title:</strong>
        <span>{{ post.title }}</span>
      </div>
      <div class="post__block">
        <strong class="post__title">Description:</strong>
        <span>{{ post.body }}</span>
      </div>
    </div>
    <custom-button @click="$emit('remove', post.id)" variant="secondary">Remove Post</custom-button>
  </div>
</template>

<script lang="ts">
const secondary = 'secondary';
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 20px;
  color: #fff;
  border-radius: 8px;
  border: 2px solid lightskyblue;
  background-color: darkcyan;
}

.post__body {
  margin-bottom: 20px;
}

.post:hover {
  box-shadow: 0 0 5px #707070;
  border-color: darkcyan;
  transition: all 0.3s;
}

.post:last-child {
  margin-bottom: 0;
}

.post__header {
  margin-bottom: 20px;
}

.post__block {
  margin-bottom: 16px;
}

.post__block:last-child {
  margin-bottom: 0;
}

.post__title {
  text-decoration: underline;
  margin-right: 10px;
  letter-spacing: 1px;
  font-size: 20px;
}
</style>
