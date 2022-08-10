<template>
  <div class="pagination">
    <button
      href="#"
      :key="page"
      v-for="page in pages"
      class="pagination__item"
      :class="{ 'active-page': page === pageNumber }"
      @click="$emit('changePage', page)"
    >
      {{ page }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    pages: {
      type: Array,
      required: true,
    },
    pageNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  margin-top: 15px;
  gap: 10px;
  justify-content: center;
}

.pagination__item {
  border: 2px solid lightskyblue;
  border-radius: 8px;
  color: #fff;
  background-color: darkcyan;
  padding: 5px;
  align-items: center;
  cursor: pointer;
}

.pagination__item:hover {
  box-shadow: 0 0 5px #707070;
  transition: all 0.3s;
  border-color: darkcyan;
}

.active-page {
  color: #707070;
  background-color: transparent;
}
</style>
