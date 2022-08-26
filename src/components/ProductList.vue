<template>
  <div class="product-list">
    <div v-if="products.length > 0" class="product-list__content">
      <h2 class="product-list__title">List of Products</h2>
      <transition-group name="list" tag="div">
        <product
          v-for="product in products"
          :product="product"
          :key="product.id"
          @remove="$emit('remove', product.id)"
        />
      </transition-group>
    </div>
    <h2 v-else class="product-list__empty-title">The list of products is empty</h2>
  </div>
</template>

<script lang="ts">
import product from './Product.vue';
export default {
  components: {
    product,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-list__title {
  margin-bottom: 10px;
}

.product-list__empty-title {
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.list-move {
  transition: transform 0.8s ease;
}

</style>
