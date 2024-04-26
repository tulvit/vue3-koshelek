<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'

import { useMarketDepthStore } from '@/stores/market'
import { useSymbolStore } from '@/stores/symbol'
import getDepth from './comsolables/getDepth'
import subscribeDepth from '@/comsolables/subscribeDepth'

const symbol = useSymbolStore()
const { connect, closeConnection } = subscribeDepth()
symbol.set({ value: 'BTCUSDT', title: 'BTCUSDT' })

connect(symbol.symbol.value)

symbol.$subscribe(() => {
  closeConnection()
  connect(symbol.symbol.value)
})
</script>

<template>
  <TheHeader
    title="Test assignment"
    :links="[
      { to: '/vue3-koshelek/', title: 'Settings' },
      { to: '/vue3-koshelek/order', title: 'Order Book' }
    ]"
  />
  <RouterView />
</template>
