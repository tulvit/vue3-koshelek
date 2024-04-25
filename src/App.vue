<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'

import { watch } from 'vue'
import { useMarketDepthStore } from '@/stores/market'
import { useSymbolStore } from '@/stores/symbol'
import getDepth from './comsolables/getDepth'
import subscribeDepth from '@/comsolables/subscribeDepth'

const symbol = useSymbolStore()
const marketDepth = useMarketDepthStore()
const { load, depth } = getDepth()
const { connect, closeConnection } = subscribeDepth()
symbol.set({ value: 'BTCUSDT', title: 'BTCUSDT' })
load(symbol.symbol.value)
connect(symbol.symbol.value)

symbol.$subscribe((mutation, state) => {
  load(symbol.symbol.value)
  closeConnection()
  connect(symbol.symbol.value)
})

watch(depth, () => {
  marketDepth.save(depth.value)
})
</script>

<template>
  <TheHeader
    title="Test assignment"
    :links="[
      { to: '/', title: 'Settings' },
      { to: '/order', title: 'Order Book' }
    ]"
  />
  <RouterView />
</template>
