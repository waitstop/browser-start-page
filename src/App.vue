<template>
  <div
    class="text-white h-dvh w-full bg-gradient-to-b from-slate-500 to-slate-800 flex justify-center items-center"
  >
    <div class="w-full p-4 max-w-2xl space-y-4">
      <Suspense>
        <WeatherWidget class="shadow-md" />
        <template #fallback>
          <Icon icon="mingcute:loading-fill" class="text-3xl animate-spin" />
        </template>
      </Suspense>
      <SearchInput />
      <div class="flex gap-4 md:justify-between flex-wrap">
        <div v-for="link in links" :key="link.href">
          <a
            class="bg-white/25 size-16 flex items-center justify-center rounded-md transition-all hover:scale-[1.1] shadow-md"
            :href="link.href"
          >
            <Icon class="text-3xl" :icon="link.icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import SearchInput from '@/components/SearchInput.vue'
import WeatherWidget from '@/components/WeatherWidget.vue'

const links: { icon: string; href: string }[] = [
  { icon: 'simple-icons:youtube', href: 'https://www.youtube.com' },
  { icon: 'simple-icons:github', href: 'https://github.com' },
  { icon: 'simple-icons:gitlab', href: 'https://gitlab.com' },
  {
    icon: 'simple-icons:googletranslate',
    href: 'https://translate.google.ru/?sl=en&tl=ru&op=translate'
  },
  {
    icon: 'game-icons:samurai-helmet',
    href: 'https://crm.cybersamurai.studio/crm/task_list'
  },
  {
    icon: 'ci:map',
    href: 'https://yandex.ru/maps'
  },
  {
    icon: 'ci:cloud',
    href: 'https://yandex.ru/pogoda?via=hl'
  }
]
</script>
