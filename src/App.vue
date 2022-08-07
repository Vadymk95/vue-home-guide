<template>
  <div class="app">
    <post-form @create="createPost"/>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script lang="ts">
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import { IPost } from '@/models/Post';
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'JS post description' },
        { id: 2, title: 'Vue', body: 'Vue post description' },
        { id: 3, title: 'Angular', body: 'Angular post description' },
        { id: 4, title: 'Ember', body: 'Ember post description' },
      ] as IPost[],
    };
  },
  methods: {
    createPost(post: IPost) {
      this.posts.push(post);
    },
    removePost(id: number) {
      this.posts = this.posts.filter((post: IPost) => post.id !== id);
    }
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

</style>
