<script setup lang="ts">
import { onBeforeMount, reactive, type Ref } from 'vue';
import DataService from '@/services/dataService';
import type { ProductItem } from '@/helpers/types';

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  }
});

const productDetails = reactive(null as unknown as Ref<ProductItem>);

const getProductDetails = async (productId: number) => {
  productDetails.value = DataService.getProduct(productId)?.item || {};
}

onBeforeMount(async () => {
  await getProductDetails(props.productId);
})
</script>
<template>
  <p>aaaa</p>
  <p>{{ props.productId }}</p>
</template>
