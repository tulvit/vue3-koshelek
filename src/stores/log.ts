import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLogStore = defineStore('log', () => {
  const log = ref(Array())
  function push(from: string, to: string) {
    log.value.push({ time: new Date(), pair: { from: from, to: to } })
  }

  return { log, push }
})
