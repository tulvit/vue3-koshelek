<script setup lang="ts">
import { ref } from 'vue'

import SelectPair from '../components/SelectPair.vue'
import PairLog from '../components/PairLog.vue'

const hardcodedOptions = ref([
  { title: 'BTC / USDT', value: 'BTCUSDT' },
  { title: 'BNB / BTC', value: 'BNBBTC' },
  { title: 'ETH / BTC', value: 'ETHBTC' }
])
</script>

<template>
  <main>
    <h1>Settings</h1>
    <SelectPair :options="hardcodedOptions" />
    <PairLog />
  </main>
</template>
