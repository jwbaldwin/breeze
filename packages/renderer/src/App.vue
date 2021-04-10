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
    <div class="flex w-full h-12 titlebar">
      <div class="w-2/5" />
      <div class="flex items-center w-full px-8 bg-white">
        <button
          v-if="shouldShowBackButton"
          type="button"
          onClick="back"
          class="inline-flex items-center px-3 py-2 text-sm leading-4 text-gray-400 border border-gray-300 rounded-md font-base hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-600"
        >
          <!-- Heroicon name: solid/mail -->
          <svg
            class="-ml-0.5 mr-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>
    </div>
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
export default defineComponent({
  name: 'App',
  components: {AppSidebar},
  setup() {
    const shouldShowBackButton = () => {
      console.log(this.$route)
      return this.$route.name == '/' || this.$route.name == '/home'
    }
    return {
      shouldShowBackButton,
    }
  },
  methods: {
    back() {
      this.$route.push('/')
    },
  },
})
</script>

<style>
.titlebar {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

button, input, img, span, a, svg {
  -webkit-app-region: no-drag;
}
</style>