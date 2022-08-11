export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:isShow', false);
    },
  },
};
