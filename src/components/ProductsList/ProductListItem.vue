<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { ProductListItem } from '@/helpers/types';
import router from '@/router';

const props = defineProps({
  product: {
    type: Object as PropType<ProductListItem>,
    required: true,
  }
});

const altImageTitle = computed(() => {
  return `Image of ${props.product.name}`;
});

const productItemThumbnail = computed(() => {
  return `background-image: url(${props.product.image});`
})

const goToProductDetails = () => {
  router.push({ name: 'productDetails', params: { productId: props.product.id } });
}
</script>
<template>
  <div 
    class="product__list-item"
    @click="goToProductDetails"
  >
    <div class="product__list-item-image-wrapper">
      <div 
        class="product__list-item-image"
        :title="altImageTitle" 
        :style="productItemThumbnail" 
      ></div>
    </div>
    <p>{{ props.product.name }}</p>
  </div>
</template>
<style lang="scss">
.product__list-item {
  flex: 1 0 30%;
  max-width: 30%;
  overflow: hidden;
  margin: 5px;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid var(--color-gray);
  background: var(--color-white);
  box-shadow: var(--shadow);
  transition: 0.5s all;

  &-image-wrapper {
    display: block;
    overflow: hidden;
    width: 90%;
    height: 25vh;
    margin: 10px auto;
  }

  &-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.5s all;
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    cursor: pointer;
    box-shadow: var(--shadow--hover);
    transition: 0.5s all;
    transform: translateY(-5px);

    .product__list-item-image {
      transition: 0.5s all;
      transform: scale(1.2);
    }
  }
}
</style>
