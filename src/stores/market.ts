import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMarketDepthStore = defineStore('marketDepth', () => {
  const marketDepth = ref({ bids: new Map(), asks: new Map(), lastUpdateId: 0 })
  function save(data: {
    bids: Array<Array<string>>
    asks: Array<Array<string>>
    lastUpdateId: any
  }) {
    marketDepth.value.bids = new Map(
      data.bids.map((item) => {
        return [item.shift(), item.shift()]
      })
    )
    marketDepth.value.asks = new Map(
      data.asks.map((item) => {
        return [item.shift(), item.shift()]
      })
    )
    marketDepth.value.lastUpdateId = data.lastUpdateId
  }

  function update(data: { a: Array<Array<string>>; b: Array<Array<string>> }) {
    data.b.map((value) => {
      const price = value.shift()
      const amount = value.shift()
      if (Number(amount) > 0) marketDepth.value.bids.set(price, amount)
      else marketDepth.value.bids.delete(price)
      if (marketDepth.value.bids.size > 1100) {
        marketDepth.value.bids.delete(marketDepth.value.bids.keys().next().value)
      }
    })
    data.a.map((value) => {
      const price = value.shift()
      const amount = value.shift()
      if (Number(amount) > 0) marketDepth.value.asks.set(price, amount)
      else marketDepth.value.asks.delete(price)
      if (marketDepth.value.asks.size > 1100) {
        marketDepth.value.asks.delete(marketDepth.value.asks.keys().next().value)
      }
    })
  }

  return { marketDepth, save, update }
})
