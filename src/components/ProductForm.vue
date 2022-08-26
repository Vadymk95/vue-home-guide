<template>
  <form class="form" @submit.prevent>
    <h3 class="form__title">Add New Product</h3>
    <fieldset class="form__wrap">
      <div>
        <custom-input
          class="form__input input"
          type="text"
          placeholder="Add product name"
          v-model="post.title"
          v-focus
        />
      </div>
      <div>
        <custom-input
          class="form__input"
          type="text"
          placeholder="Add product description"
          v-model="post.body"
        />
      </div>
      <custom-button class="form__btn" @click="createProduct" variant="primary">Add Product</custom-button>
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
    createProduct() {
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
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: none;
}

.form__wrap > div {
  width: 100%;
}

.form__btn {
  margin-top: 50px;
}

.form__title {
  text-align: center;
  margin-bottom: 10px;
}
</style>
