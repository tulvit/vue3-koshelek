<script setup lang="ts">
import { ref } from 'vue'
import { useMarketDepthStore } from '@/stores/market'
import { useSymbolStore } from '@/stores/symbol'
import OrderTable from './OrderTable.vue'

const props = defineProps({ title: { type: String } })
const marketDepth = useMarketDepthStore()
const symbol = useSymbolStore()
</script>

<template>
  <h2 class="text-lg">{{ symbol.symbol.title }}</h2>
  <div class="max-height-screen">
    <div class="flex flex-col md:flex-row gap-5">
      <OrderTable title="Bids" :data="marketDepth.marketDepth.bids" :limit="20" />
      <OrderTable title="Asks" :data="marketDepth.marketDepth.asks" :limit="20" />
    </div>
  </div>
</template>
