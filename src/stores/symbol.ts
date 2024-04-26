import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSymbolStore = defineStore('symbol', () => {
  const symbol = ref({ value: '', title: '' })
  function set(data: { value: string; title: string }) {
    symbol.value = { value: data.value, title: data.title }
  }

  return { symbol, set }
})
