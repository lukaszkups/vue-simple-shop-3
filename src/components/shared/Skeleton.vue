<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    required: false,
    default: '16px',
  }
});
</script>
<template>
  <div 
    class="skeleton"
    :style="`height: ${props.height}`"
  ></div>
</template>
<style lang="scss">
@keyframes floatingGradient {
  0%   { background-position:  100%; }
  100% { background-position: -100%; }
}

.skeleton {
  width: 100%;
  display: block;
  animation: 3s linear infinite floatingGradient;
  background: linear-gradient(to right, #eeeeee 0%, #dddddd 8%, #eeeeee 16%, #eeeeee 50%, #dddddd 58%, #eeeeee 66%);
  background-size: 200%;
  height: 100%; width: 100%;
}
</style>
