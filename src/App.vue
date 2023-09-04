<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Fund Management Demo</span>
        <div class="hidden lg:flex lg:flex-grow-1">
          <div class="navbar-collapse">
            <div class="navbar-nav">
              <RouterLink class="nav-link" to="/">Home</RouterLink>
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </div>
          </div>
        </div>
        <div class="lg:hidden flex">
          <Button
            icon="pi pi-bars"
            size="small"
            rounded
            outlined
            aria-label="More menu"
            @click="toggleSidebar"
          />
        </div>
      </div>
    </nav>
    <Sidebar v-model:visible="visible" position="right">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/about">About</RouterLink>
    </Sidebar>
  </header>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
const visible = ref(true)
const toggleSidebar = () => {
  visible.value = !visible.value
}
</script>

<style>
a:focus,
button:focus {
  outline: none !important;
  box-shadow: none !important;
}
</style>
