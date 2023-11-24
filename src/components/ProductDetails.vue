<script setup lang="ts">
const props = defineProps({
  productId: {
    type: Number,
    required: true,
  }
});
</script>
<template>
  <p>aaaa</p>
  <p>{{ props.productId }}</p>
</template>
