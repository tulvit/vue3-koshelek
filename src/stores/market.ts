import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMarketDepthStore = defineStore('marketDepth', () => {
  const marketDepth = ref({})
  function save(data: Object) {
    marketDepth.value = data
  }

  return { marketDepth, save }
})
