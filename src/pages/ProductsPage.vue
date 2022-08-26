<template>
  <custom-input
    class="search-input"
    placeholder="Search..."
    v-model="searchQuery"
    v-focus
  />
  <custom-modal v-model:isShow="modalVisible">
    <product-form @create="createProduct" />
  </custom-modal>
  <div class="btn-group">
    <custom-button variant="primary" @click="showModal">
      Create a product
    </custom-button>
    <custom-select v-model="selectedSort" :options="sortOptions" />
  </div>
  <product-list :products="searchedProducts" @remove="removeProduct" v-if="!isLoading" />
  <!-- <custom-loader v-else /> -->
  <!-- <pagination :pages="totalPages" :pageNumber="pageNumber" @changePage="changePage"/> -->
  <div v-intersection="loadMoreProducts" class="observer"></div>
</template>

<script lang="ts">
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';
import ProductHeader from '@/components/ProductHeader.vue';
import { IProduct } from '@/models/Product';
import axios from 'axios';
// import Pagination from '@/components/Pagination.vue';

export default {
  components: {
    ProductForm,
    ProductList,
    // Pagination,
    ProductHeader,
  },
  data() {
    return {
      posts: [] as IProduct[],
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
    createProduct(product: IProduct) {
      this.posts.push(product);
      this.modalVisible = false;
    },
    removeProduct(id: number) {
      this.posts = this.posts.filter((product: IProduct) => product.id !== id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchProducts() {
      try {
        this.isLoading = true;
        const response = await axios(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.pageNumber,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          <any>response.headers['x-total-count'] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
    async loadMoreProducts() {
      try {
        this.pageNumber += 1;
        const response = await axios(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: this.pageNumber,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          <any>response.headers['x-total-count'] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert(error);
      }
    },
    // changePage (pageNumber: number) {
    //   this.pageNumber = pageNumber;
    // }
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    sortedProducts() {
      return [...this.posts].sort(
        (
          prod1: { title: string; body: string },
          prod2: { title: string; body: string }
        ) =>
          prod1[this.selectedSort as keyof typeof prod1]?.localeCompare(
            prod2[this.selectedSort as keyof typeof prod2]
          )
      );
    },
    searchedProducts() {
      return this.sortedProducts.filter((product: IProduct) =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // pageNumber() {
    //   this.fetchProducts();
    // }
  },
};
</script>

<style>

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
