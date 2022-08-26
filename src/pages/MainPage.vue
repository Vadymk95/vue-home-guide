<template>
  <div class="main-page">
    <tender />
    <feedbacks />
  </div>
</template>

<script lang="ts">
import tender from '@/components/Tender.vue';
import feedbacks from '@/components/Feedbacks.vue';
export default {
    components: {
    tender,
    feedbacks
  },
}
</script>

<style scoped>

</style>
