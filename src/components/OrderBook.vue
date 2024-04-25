<script setup lang="ts">
import { ref } from 'vue'
import { useMarketDepthStore } from '@/stores/market'
import { useSymbolStore } from '@/stores/symbol'
import OrderTable from './OrderTable.vue'

const props = defineProps({ title: { type: String } })
const marketDepth = useMarketDepthStore()
const symbol = useSymbolStore()
const limit = ref(100)
</script>

<template>
  <h2 class="text-lg">{{ symbol.symbol.title }}</h2>
  <v-select
    class="width-100"
    label="Number of rows to show"
    :items="[
      { title: '100', value: 100 },
      { title: '500', value: 500 },
      { title: '1000', value: 1000 }
    ]"
    v-model="limit"
  ></v-select>
  <div class="max-height-screen">
    <div class="flex flex-col md:flex-row gap-5">
      <OrderTable
        title="Bids"
        :data="
          Array.from(marketDepth.marketDepth.bids)
            .sort((a, b) => b[0] - a[0])
            .slice(0, limit)
        "
      />
      <OrderTable
        title="Asks"
        :data="
          Array.from(marketDepth.marketDepth.asks)
            .sort((a, b) => a[0] - b[0])
            .slice(0, limit)
        "
      />
    </div>
  </div>
</template>
