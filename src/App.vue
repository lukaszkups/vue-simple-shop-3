<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <app-header />
  <div class="app-content">
    <RouterView />
  </div>
  <app-footer />
</template>
<style lang="scss">
.app-content {
  min-height: calc(100vh - 100px);
  box-sizing: border-box;
  padding: 15px 0;
  width: var(--content-width);
  margin: 0 auto;
}
</style>
