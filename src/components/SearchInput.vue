<template>
  <form @submit.prevent="handleSubmit" class="relative shadow-lg">
    <Icon
      class="text-3xl absolute top-1/2 -translate-y-1/2 left-4"
      icon="simple-icons:duckduckgo"
    />
    <input v-model="searchValue" class="bg-white/25 py-4 px-14 rounded-md w-full" type="text" />
    <button class="absolute top-1/2 -translate-y-1/2 right-4" type="submit">
      <Icon class="text-3xl" icon="ci:search" />
    </button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const searchValue = ref<string>('')
function handleSubmit() {
  if (!searchValue.value) return
  location.href = `https://duckduckgo.com/?q=${searchValue.value}`
}
</script>
