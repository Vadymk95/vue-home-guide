<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input"/>
</template>

<script lang="ts">
export default {
  name: 'custom-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event: {target: {value: string}}) {
      this.$emit('update:modelValue', event?.target.value)
    }
  }
};
</script>

<style scoped>
.input {
  outline: none;
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid lightskyblue;
}

.input:focus {
  border: 2px solid darkcyan;
}

.input:hover {
  box-shadow: 0 0 5px #707070;
  border-color: darkcyan;
  transition: all 0.3s;
}
</style>
