<template>
  <form class="form" @submit.prevent>
    <h3 class="form__title">Create a post</h3>
    <fieldset class="form__wrap">
      <div>
        <input
          class="form__input"
          type="text"
          placeholder="Add post title"
          v-model="post.title"
        />
      </div>
      <div>
        <input
          class="form__input"
          type="text"
          placeholder="Add post description"
          v-model="post.body"
        />
      </div>
      <button @click="createPost" class="form__button btn">Add Post</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      if (!this.post.title || !this.post.body) return;
      this.post.id = Date.now();
      this.post.title = this.post.body = '';
    },
  },
};
</script>

<style scoped>
.form__wrap {
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  border: none;
}

.form__title {
  margin-bottom: 10px;
}

.form__button {
  padding: 10px 30px;
  cursor: pointer;
  margin-bottom: 10px;
}

.form__input {
  outline: none;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid lightskyblue;
}

.form__input:focus {
  border: 2px solid darkcyan;
}

.form__button {
  color: #fff;
  border-radius: 8px;
  border: 2px solid lightskyblue;
  background-color: darkcyan;
}

.form__button:hover,
.form__input:hover {
  box-shadow: 0 0 5px #707070;
  border-color: darkcyan;
  transition: all 0.3s;
}

.form__button:active {
  border-color: lightskyblue;
}
</style>
