import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { CartItem, ProductItem } from '@/helpers/types';

export const useCounterStore = defineStore('cart', () => {
  const cartItems = ref([]) as Ref<CartItem[]>;
  const cartTotalPrice = computed(() => cartItems.value.reduce((sum, item: CartItem) => sum + parseFloat(item.price), 0))
  
  function addItemToCart(productItem: ProductItem) {
    const items = [...cartItems.value];
    const itemInCartIndex = items.findIndex((item: CartItem) => item.id === productItem.id);
    if (itemInCartIndex > -1) {
      items[itemInCartIndex].quantity++;
    } else {
      items.push({...productItem, quantity: 1});
    }
    cartItems.value = items;
  }

  function removeItemFromCart(productId: number) {
    const items = [...cartItems.value];
    const productIndex = items.findIndex((item: CartItem) => item.id === productId);
    if (productIndex > -1) {
      items.splice(productIndex, 1);
      cartItems.value = items;
    }
  }

  function increaseItemQuantity(productId: number) {
    const items = [...cartItems.value];
    const productIndex = items.findIndex((item: CartItem) => item.id === productId);
    if (productIndex > -1) {
      items[productIndex].quantity++;
      cartItems.value = items;
    }
  }

  function decreaseItemQuantity(productId: number) {
    const items = [...cartItems.value];
    const productIndex = items.findIndex((item: CartItem) => item.id === productId);
    if (productIndex > -1) {
      items[productIndex].quantity = items[productIndex].quantity >= 0 ? items[productIndex].quantity-- : 0;
      cartItems.value = items;
    }
  }

  return { cartItems, cartTotalPrice, addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity }
})
