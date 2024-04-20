<script setup lang="ts">
import { ref } from 'vue'
import { useLogStore } from '@/stores/log'

const log = useLogStore()
</script>

<template>
  <h2>Log</h2>
  <li v-for="item in log.log" :key="item">
    <div>{{ item.pair.from }} -> {{ item.pair.to }}</div>
    <em
      >at
      {{
        new Date(item.time).toLocaleString(undefined, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          weekday: 'long',
          hour: '2-digit',
          hour12: false,
          minute: '2-digit',
          second: '2-digit'
        })
      }}
    </em>
  </li>
</template>
