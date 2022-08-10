<template>
  <div class="app">
    <post-header />
    <custom-input
      class="search-input"
      placeholder="Search..."
      v-model="searchQuery"
    />
    <custom-modal v-model:isShow="modalVisible">
      <post-form @create="createPost" />
    </custom-modal>
    <div class="btn-group">
      <custom-button variant="primary" @click="showModal">
        Create a post
      </custom-button>
      <custom-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <post-list :posts="searchedPosts" @remove="removePost" v-if="!isLoading" />
    <custom-loader v-else />
    <pagination :pages="totalPages" :pageNumber="pageNumber" @changePage="changePage"/>
  </div>
</template>

<script lang="ts">
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { IPost } from '@/models/Post';
import axios from 'axios';
import Pagination from '@/components/Pagination.vue';
import PostHeader from './components/PostHeader.vue';
export default {
  components: {
    PostForm,
    PostList,
    Pagination,
    PostHeader
},
  data() {
    return {
      posts: [] as IPost[],
      modalVisible: false,
      isLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'by Name' },
        { value: 'body', name: 'by Content' },
      ],
      searchQuery: '',
      pageNumber: 1,
      limit: 10,
      totalPages: 0,
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
    async fetchPosts() {
      try {
        this.isLoading = true;
        const response = await axios(
          'https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.pageNumber,
              _limit: this.limit
            }
          }
        );
        this.totalPages = Math.ceil(<any>response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
    changePage (pageNumber: number) {
      this.pageNumber = pageNumber;
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort(
        (
          post1: { title: string; body: string },
          post2: { title: string; body: string }
        ) =>
          post1[this.selectedSort as keyof typeof post1]?.localeCompare(
            post2[this.selectedSort as keyof typeof post2]
          )
      );
    },
    searchedPosts() {
      return this.sortedPosts.filter((post: IPost) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    pageNumber() {
      this.fetchPosts();
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

html {
  height: 100vh;
}

body {
  background-color: #eaeaea;
}

.app {
  background-color: #fff;
  height: 100%;
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
}

.btn-group {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  margin-bottom: 10px;
}
</style>
