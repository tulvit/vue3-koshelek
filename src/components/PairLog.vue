<script setup lang="ts">
import { ref } from 'vue'
import { useLogStore } from '@/stores/log'

const props = defineProps({ title: { type: String } })
const log = useLogStore()

const formatDate = (date: Date) => {
  return new Date(date).toLocaleString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    second: '2-digit'
  })
}
</script>

<template>
  <h2>{{ props.title }}</h2>
  <v-list lines="one">
    <v-list-item
      v-for="item in log.log"
      :key="item"
      :title="item.pair.from + ' to ' + item.pair.to"
      :subtitle="formatDate(item.time)"
    ></v-list-item>
  </v-list>
</template>
