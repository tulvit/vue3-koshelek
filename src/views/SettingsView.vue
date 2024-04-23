<script setup lang="ts">
import { ref } from 'vue'

import SelectPair from '../components/SelectPair.vue'
import PairLog from '../components/PairLog.vue'

const props = defineProps({ title: { type: String } })

const hardcodedOptions = ref([
  { title: 'BTC / USDT', value: 'BTCUSDT' },
  { title: 'BNB / BTC', value: 'BNBBTC' },
  { title: 'ETH / BTC', value: 'ETHBTC' }
])
</script>

<template>
  <main>
    <h1>{{ props.title }}</h1>
    <SelectPair :options="hardcodedOptions" title="Settings" />
    <PairLog title="Change log:" />
  </main>
</template>
