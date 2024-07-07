<template>
  <div class="bg-black/10 w-fit p-4 rounded-md">
    <div>
      <div class="flex items-start gap-3">
        <span class="text-3xl">{{ weather.temp_c }} °C</span>
        <img class="size-12 bg-black/10 rounded-full" :src="weather.condition.icon" alt="" />
      </div>
    </div>
    <p>{{ weather.condition.text }}</p>
    <span class="text-2xl"
      >{{ kphToMps(weather.wind_kph) }} м/с <Icon class="inline" icon="ph:wind" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import getWeather from '@/utils/getWeather'
import kphToMps from '@/utils/kphToMps'

const { current: weather } = await getWeather()
console.log(weather)
</script>

<style scoped></style>
