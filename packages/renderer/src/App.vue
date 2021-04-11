<template>
  <!-- Background color split screen for large screens -->
  <div
    class="fixed top-0 left-0 w-1/2 h-full bg-white"
    aria-hidden="true"
  />
  <div
    class="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
    aria-hidden="true"
  />
  <div class="relative flex flex-col min-h-screen">
    <!-- Left sidebar & main wrapper -->
    <app-titlebar /> 
    <div class="flex flex-grow min-w-0 px-8 bg-white">
      <!-- Account profile -->
      <app-sidebar /> 
      <!-- Projects List -->
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppTitlebar from '@/components/AppTitlebar.vue'

export default defineComponent({
  name: 'App',
  components: {AppSidebar, AppTitlebar},
})
</script>
