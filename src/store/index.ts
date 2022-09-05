import { productModule } from '@/store/productModule';
import { createStore } from 'vuex';

export default createStore({
  state: {
    rating: 0,
  },
  getters: {},
  mutations: {
    increaseRating(state) {
      if (state.rating === 5) return;
      state.rating += 1;
    },
    decreaseRating(state) {
      if (state.rating === 0) return;
      state.rating -= 1;
    },
  },
  actions: {},
  modules: {
    product: productModule,
  },
});
