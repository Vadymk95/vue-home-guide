<template>
  <div class="app">
    <header>
      <hgroup class="titles-group">
        <h1 class="title-top">An interesting project about posts</h1>
        <h4 class="title-bottom">created by Vue3</h4>
      </hgroup>
    </header>
    <custom-modal v-model:isShow="modalVisible">
      <post-form @create="createPost" />
    </custom-modal>
    <div class="btn-group">
      <custom-button variant="primary" @click="fetchUsers">Download posts</custom-button>
      <custom-button variant="primary" @click="showModal"
        >Create a post</custom-button
      >
    </div>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { IPost } from '@/models/Post';
import CustomButton from '@/components/UI/CustomButton.vue';
import axios from 'axios';
export default {
  components: {
    PostForm,
    PostList,
    CustomButton,
  },
  data() {
    return {
      posts: [] as IPost[],
      modalVisible: false,
    };
  },
  methods: {
    createPost(post: IPost) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(id: number) {
      this.posts = this.posts.filter((post: IPost) => post.id !== id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchUsers() {
      try {
        const response = await axios(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        this.posts = response.data;
      } catch (error) {
        alert(error);
      }
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
  background-color: #eaeaea;
  height: 100vh;
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
}

.titles-group {
  color: #707070;
  margin-bottom: 40px;
  text-align: center;
}

.title-top {
  text-transform: uppercase;
}

.title-bottom {
  color: #303030;
}

.btn-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
</style>
