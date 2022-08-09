<template>
  <select class="custom-select" v-model="modelValue" @change="changeOption">
    <option disabled value="">Filter by</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
export default {
  name: 'custom-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event: { target: { value: string } }) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>

.custom-select {
  border-color: lightskyblue;
  color: #fff;
  background-color: darkcyan;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 700;
  outline: none;
  padding: 10px;
}

.custom-select > option:disabled {
  background-color: #eaeaea;
}

.custom-select:hover {
  box-shadow: 0 0 5px #707070;
  transition: all 0.3s;
}

</style>
