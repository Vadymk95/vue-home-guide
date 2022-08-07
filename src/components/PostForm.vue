<template>
  <form class="form" @submit.prevent>
    <h3 class="form__title">Create a post</h3>
    <fieldset class="form__wrap">
      <div>
        <custom-input
          class="form__input input"
          type="text"
          placeholder="Add post title"
          v-model="post.title"
        />
      </div>
      <div>
        <custom-input
          class="form__input"
          type="text"
          placeholder="Add post description"
          v-model="post.body"
        />
      </div>
      <custom-button @click="createPost" variant="primary">Add Post</custom-button>
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
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
.form__wrap {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  border: none;
}

.form__title {
  margin-bottom: 10px;
}
</style>
