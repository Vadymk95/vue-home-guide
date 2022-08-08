<template>
  <div v-if="isShow" @click="closeModal" class="modal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'custom-modal',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:isShow', false);
    }
  }
};
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  padding: 16px;
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  min-width: 300px;
  min-height: 300px;
}
</style>
