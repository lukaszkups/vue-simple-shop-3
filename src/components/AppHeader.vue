<script setup lang="ts">

</script>
<template>
<header class="app-header">
  <div class="app-header__wrapper">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />

    <div class="app-header__nav-wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
</header>
</template>
<style lang="scss">
.app-header {
  line-height: 1.5;
  width: 100vw;
  height: 50px;
  background: var(--color-white);
  box-shadow: var(--shadow);
  
  &__wrapper {
    width: var(--content-width);
    margin: 0 auto;
    display: flex;

    .logo {
      flex: 1;
      margin: 12px 0;
      max-width: 25px;
    }

    .app-header__nav-wrapper {
      flex: 5;
      text-align: left;
      margin-left: 100px;

      nav {
        font-size: 12px;
        margin: 0;
        display: flex;
    
        a.router-link-exact-active {
          color: var(--color-blue);
    
          &:hover {
            color: var(--color-blue--light);
            text-decoration: underline;
          }
        }
        
        a {
          color: var(--color-black);
          // display: inline-block;
          flex: 1;
          margin-left: auto;
          order: 2;
          line-height: 50px;
          text-decoration: none;
          padding: 0 1rem;
    
          &:hover {
            color: var(--color-blue);
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
