import { productModule } from '@/store/moduls/ProductModule';
import { authModule } from '@/store/moduls/AuthModule';
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
    auth: authModule,
  },
});
