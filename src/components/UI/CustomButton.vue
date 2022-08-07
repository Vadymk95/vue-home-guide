<template>
  <button :class="variant">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'custom-button',
  props: {
    variant: {
      type: String,
    },
  },
};
</script>

<style scoped>
.primary,
.secondary {
  border-radius: 8px;
  font-weight: 700;
  border: 2px solid;
  padding: 10px 30px;
  cursor: pointer;
  color: #fff;
}

.primary {
  border-color: lightskyblue;
  background-color: darkcyan;
}

.primary:hover {
  border-color: darkcyan;
}

.primary:hover,
secondary:hover {
  box-shadow: 0 0 5px #707070;
  transition: all 0.3s;
}

.primary:active,
.secondary:active {
  box-shadow: 1px 2px 3px #000;
  transition: none;
  color: #eaeaea;
}

.secondary {
  border-color: lightskyblue;
  background-color: transparent;
}

.secondary:hover {
  border-color: #fff;
}
</style>
