<script setup lang="ts">
import ProductDetails from '../components/ProductDetails.vue'


</script>

<template>
  <main>
    <ProductDetails :product-id="Number($route.params.productId || '')" />
  </main>
</template>
