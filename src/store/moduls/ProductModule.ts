import { Commit } from 'vuex';
import axios from 'axios';
import { IProduct } from '@/models/Product';
import { IProductState } from '@/models/State';

type ActionType = {
  state: IProductState;
  commit: Commit;
};

export const productModule = {
  state: () => ({
    products: [] as IProduct[],
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
  }),
  getters: {
    sortedProducts(state: IProductState) {
      return [...state.products].sort(
        (
          prod1: { title: string; body: string },
          prod2: { title: string; body: string }
        ) =>
          prod1[state.selectedSort as keyof typeof prod1]?.localeCompare(
            prod2[state.selectedSort as keyof typeof prod2]
          )
      );
    },
    searchedProducts(state: IProductState, getters: any) {
      return getters.sortedProducts.filter((product: IProduct) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setProducts(state: IProductState, posts: IProduct[]) {
      state.products = posts;
    },
    setLoading(state: IProductState, bool: boolean) {
      state.isLoading = bool;
    },
    setPage(state: IProductState, page: number) {
      state.pageNumber = page;
    },
    setSelectedSort(state: IProductState, selectedSort: string) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state: IProductState, totalPages: number) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state: IProductState, searchQuery: string) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchProducts({ state, commit }: ActionType) {
      try {
        commit('setLoading', true);
        const response = await axios(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.pageNumber,
              _limit: state.limit,
            },
          }
        );
        commit(
          'setTotalPages',
          Math.ceil(<any>response.headers['x-total-count'] / state.limit)
        );
        commit('setProducts', response.data);
      } catch (error) {
        alert(error);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMoreProducts({ state, commit }: ActionType) {
      try {
        commit('setPage', (state.pageNumber += 1));
        const response = await axios(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _page: state.pageNumber,
              _limit: state.limit,
            },
          }
        );
        commit(
          'setTotalPages',
          Math.ceil(<any>response.headers['x-total-count'] / state.limit)
        );
        commit('setProducts', [...state.products, ...response.data]);
      } catch (error) {
        alert(error);
      }
    },
  },
  namespaced: true,
};
