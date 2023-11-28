<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import DataService from '@/services/dataService';
import type { ProductListItem as ProductListItemType } from '@/helpers/types';
import ProductListItem from './ProductListItem.vue';
import Skeleton from '@/components/shared/Skeleton.vue';

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
  const resp = await DataService.getProducts(page);
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
    <template v-if="!appData.loading">
      <product-list-item 
        v-for="product in appData.products"
        :product="product"
        :key="product.id"
      />
    </template>
    <template v-else>
      <div 
        v-for="item in [1,2,3]"
        :key="item"
        class="product-item-skeleton"
      >
        <skeleton height="225px" />
      </div>
    </template>
  </div>
</template>
<style lang="scss">
.view-product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-item-skeleton {
  flex: 1 0 30%;
  max-width: 30%;
  overflow: hidden;
  margin: 5px;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid var(--color-gray);
  background: var(--color-white);
  box-shadow: var(--shadow);
}
</style>