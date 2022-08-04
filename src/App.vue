<template>
  <div class="app">
    <div class="post">
      <div class="post__block">
        <strong class="post__title">Title:</strong>
        <span>Post about JS</span>
      </div>
      <div class="post__block">
        <strong class="post__title">Description:</strong>
        <span>JS is the best programming language!</span>
      </div>
    </div>
    <div class="post">
      <div class="post__block">
        <strong class="post__title">Title:</strong>
        <span>Post about JS</span>
      </div>
      <div class="post__block">
        <strong class="post__title">Description:</strong>
        <span>JS is the best programming language!</span>
      </div>
    </div>
    <div class="post">
      <div class="post__block">
        <strong class="post__title">Title:</strong>
        <span>Post about JS</span>
      </div>
      <div class="post__block">
        <strong class="post__title">Description:</strong>
        <span>JS is the best programming language!</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      likes: 5,
      dislikes: 2,
    };
  },
  methods: {
    addLike() {
      this.likes += 1;
    },

    addDislike() {
      this.dislikes -= 1;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.app {
  padding: 20px;
}

/* ===post=== */
.post {
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid lightskyblue;
  background-color: darkcyan;
  margin-bottom: 20px;
}

.post:hover {
  box-shadow: 0 0 10px #707070;
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
  letter-spacing: 0.75px;
}
/* ===post=== */
</style>
