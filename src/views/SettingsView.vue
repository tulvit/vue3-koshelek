<script setup lang="ts">
import { ref } from 'vue'

import SelectPair from '../components/SelectPair.vue'
import PairLog from '../components/PairLog.vue'

const hardcodedOptions = ref([
  { text: 'BTC / USDT', value: 'BTCUSDT' },
  { text: 'BNB / BTC', value: 'BNBBTC' },
  { text: 'ETH / BTC', value: 'ETHBTC' }
])
</script>

<template>
  <main>
    <h1>Settings</h1>
    <SelectPair :options="hardcodedOptions" />
    <PairLog />
  </main>
</template>
