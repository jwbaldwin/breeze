<template>
  <div>
    <templates-header />
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="grid grid-cols-3 gap-4 p-4 border-t">
      <div
        v-for="(template, index) in templates"
        :key="index"
        class="relative flex items-center h-32 px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      >
        <div class="flex-shrink-0">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=fibx2t1MoO&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          >
        </div>
        <div class="flex-1 min-w-0">
          <a
            href="#"
            class="focus:outline-none"
          >
            <span
              class="absolute inset-0"
              aria-hidden="true"
            />
            <p class="text-sm font-medium text-gray-900">
              {{ template.name }}
            </p>
            <p class="text-sm text-gray-500 truncate">
              Co-Founder / CTO
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { Template, QnA } from 'types'
import TemplatesHeader from '@/components/templates/TemplatesHeader.vue'

export default defineComponent({
  name: 'Templates',
  components: {TemplatesHeader},
  setup() {
    const defaultTemplate = new Template('Default', [new QnA('When did you get engaged?')])
    const defaultTemplateTwo = new Template('Engagement shoot', [new QnA('When did you get engaged?')])
    const templates = Array<Template>(defaultTemplate, defaultTemplateTwo)

    return {
      templates,
    }
  },
})
</script>

<style scoped></style>