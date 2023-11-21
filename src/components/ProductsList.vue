<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import ApiMock from '@/helpers/apiMock';
import type { ProductListItem as ProductListItemType } from '@/helpers/types';
import ProductListItem from './ProductListItem.vue';

interface AppData {
  loading: boolean;
  products: ProductListItemType[];
}

const appData: AppData = reactive({
  loading: false,
  products: [],
})

// Methods

const loadProducts = async (page: number = 1) => {
  const resp = await ApiMock.getProducts(page);
  appData.products = resp.items;
}

// Lifecycle

onBeforeMount(async () => {
  appData.loading = true;
  await loadProducts();
  appData.loading = false;
});

</script>
<template>
  <div class="view-product-list">
    <product-list-item 
      v-for="product in appData.products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>
<style lang="scss">
.view-product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>