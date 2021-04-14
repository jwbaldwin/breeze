
<template>
  <div class="flex w-full h-12 titlebar">
    <div class="w-96" />
    <div class="flex items-center w-full px-1 bg-white">
      <button
        v-if="shouldShowBackButton"
        type="button"
        class="inline-flex items-center px-3 py-2 text-sm leading-4 text-gray-400 border border-gray-300 rounded-full font-base hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-600"
        @click="back"
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
        Home
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppTitlebar',
  setup() {
      const route = useRoute()
      const shouldShowBackButton = ref()

      watch(
        () => route.path,
        newPath => {
          shouldShowBackButton.value = newPath !== '/' 
        }, 
      )

      return {
          shouldShowBackButton,
      }
  },
  methods: {
    back() {
      this.$router.push('/')
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