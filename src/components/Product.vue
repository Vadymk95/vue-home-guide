<template>
  <div class="product">
    <div class="product__body">
      <h2 class="product__header">product #{{product.id}}</h2>
      <div class="product__block">
        <strong class="product__title">Name of Product:</strong>
        <span>{{ product.title }}</span>
      </div>
      <div class="product__block">
        <strong class="product__title">Description:</strong>
        <span>{{ product.body }}</span>
      </div>
    </div>
    <custom-button
      class="product__open"
      @click="$router.push(`/products/${product.id}`)"
      variant="secondary"
    >
      Open
    </custom-button>
    <custom-button
      @click="$emit('remove', product.id)"
      variant="secondary"
    >
      Remove Product
    </custom-button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style scoped>
.product {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 20px;
  color: #fff;
  border-radius: 8px;
  border: 2px solid lightskyblue;
  background-color: rgba(0, 0, 0, 0.7);
}

.product__body {
  margin-bottom: 20px;
}

.product:hover {
  box-shadow: 0 0 5px #707070;
  background-color: darkcyan;
  transition: all 0.3s;
}

.product:last-child {
  margin-bottom: 0;
}

.product__header {
  margin-bottom: 20px;
}

.product__block {
  margin-bottom: 16px;
}

.product__block:last-child {
  margin-bottom: 0;
}

.product__title {
  text-decoration: underline;
  margin-right: 10px;
  letter-spacing: 1px;
  font-size: 20px;
}

.product__open {
  margin-bottom: 10px;
}
</style>
