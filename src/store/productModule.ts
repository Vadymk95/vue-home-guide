import { IProduct } from '@/models/Product';
import { IState } from '@/models/State';
import axios from 'axios';
import { Commit } from 'vuex';

type ActionFetchOptionsType = {
  state: IState;
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
    sortedProducts(state: IState) {
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
    searchedProducts(state: IState, getters: any) {
      return getters.sortedProducts.filter((product: IProduct) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setProducts(state: IState, posts: IProduct[]) {
      state.products = posts;
    },
    setLoading(state: IState, bool: boolean) {
      state.isLoading = bool;
    },
    setPage(state: IState, page: number) {
      state.pageNumber = page;
    },
    setSelectedSort(state: IState, selectedSort: string) {
      state.selectedSort = selectedSort;
    },
    setTotalPages(state: IState, totalPages: number) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state: IState, searchQuery: string) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchProducts({ state, commit }: ActionFetchOptionsType) {
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
    async loadMoreProducts({ state, commit }: ActionFetchOptionsType) {
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
