<template>
  <custom-input
    class="search-input"
    placeholder="Search..."
    :model-value="searchQuery"
    @update:model-value="setSearchQuery"
    v-focus
  />
  <custom-modal v-model:isShow="modalVisible">
    <product-form @create="createProduct" />
  </custom-modal>
  <div class="btn-group">
    <custom-button variant="primary" @click="showModal">
      Create a product
    </custom-button>
    <custom-select
      :model-value="selectedSort"
      @update:model-value="setSelectedSort"
      :options="sortOptions"
    />
  </div>
  <product-list
    :products="searchedProducts"
    @remove="removeProduct"
    v-if="!isLoading"
  />
  <div v-intersection="loadMoreProducts" class="observer"></div>
</template>

<script lang="ts">
import ProductForm from '@/components/ProductForm.vue';
import ProductList from '@/components/ProductList.vue';
import ProductHeader from '@/components/ProductHeader.vue';
import { IProduct } from '@/models/Product';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import { IState } from '../models/State';

export default {
  components: {
    ProductForm,
    ProductList,
    ProductHeader,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'product/setPage',
      setSearchQuery: 'product/setSearchQuery',
      setSelectedSort: 'product/setSelectedSort',
    }),
    ...mapActions({
      loadMoreProducts: 'product/loadMoreProducts',
      fetchPosts: 'product/fetchProducts',
    }),
    createProduct(product: IProduct) {
      this.products.push(product);
      this.modalVisible = false;
    },
    removeProduct(id: number) {
      this.products = this.products.filter(
        (product: IProduct) => product.id !== id
      );
    },
    showModal() {
      this.modalVisible = true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      products: function (state: { product: IState }) {
        return state.product.products;
      },
      isLoading: (state: { product: IState }) => state.product.isLoading,
      selectedSort: (state: { product: IState }) => state.product.selectedSort,
      searchQuery: (state: { product: IState }) => state.product.searchQuery,
      pageNumber: (state: { product: IState }) => state.product.pageNumber,
      limit: (state: { product: IState }) => state.product.limit,
      totalPages: (state: { product: IState }) => state.product.totalPages,
      sortOptions: (state: { product: IState }) => state.product.sortOptions,
    }),
    ...mapGetters({
      sortedProducts: 'product/sortedProducts',
      searchedProducts: 'product/searchedProducts',
    }),
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
