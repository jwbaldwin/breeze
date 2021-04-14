<template>
  <div class="flex-shrink-0 w-64 bg-white border-r border-gray-200">
    <div class="py-6 pl-0 pr-6">
      <div class="flex items-center justify-between">
        <div class="flex-1 space-y-8">
          <div class="block space-y-8">
            <!-- Profile -->
            <div class="flex items-center space-x-3">
              <div class="flex-shrink-0 w-12 h-12">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixqx=fibx2t1MoO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                  alt=""
                >
              </div>
              <div class="space-y-1">
                <div class="text-sm font-medium text-gray-900">
                  Debbie Lewis
                </div>
                <a
                  href="#"
                  class="group flex items-center space-x-2.5"
                >
                  <svg
                    class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900">debbielewis</span>
                </a>
              </div>
            </div>
            <!-- Action buttons -->
            <div class="flex flex-col">
              <button
                type="button"
                class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-full shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Start a call
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center w-full px-4 py-2 mt-3 ml-0 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                New plan
              </button>
            </div>
          </div>
          <!-- Sidebar links -->
          <div class="flex flex-col space-x-0 space-y-2">
            <router-link
              to="/plan"
              tag="a"
              class="flex items-center px-3 py-2 space-x-2 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 group"
            >
              <!-- Heroicon name: solid/phone -->
              <svg
                class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span class="text-sm font-medium">Plan calls</span>
            </router-link>
            <router-link
              to="/templates"
              tag="a"
              class="flex items-center px-3 py-2 space-x-2 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 group"
            >
              <!-- Heroicon name: solid/collection -->
              <svg
                class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
              <span class="text-sm font-medium">Templates</span>
            </router-link>
            <router-link
              to="/recents"
              tag="a"
              class="flex items-center px-3 py-2 space-x-2 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 group"
            >
              <!-- Heroicon name: solid/archive -->
              <svg
                class="w-5 h-5 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fill-rule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-sm font-medium">Recent calls</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({
  name: 'AppSidebar',
  })
</script>