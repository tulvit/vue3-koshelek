<script setup lang="ts">
import { ref } from 'vue'
import { useMarketDepthStore } from '@/stores/market'

const props = defineProps({ title: { type: String } })
const marketDepth = useMarketDepthStore()
</script>

<template>
  <h2>{{ props.title }}</h2>
  <h1>Bids</h1>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Price</th>
        <th class="text-left">Amount</th>
        <th class="text-left">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(bid, index) in marketDepth.marketDepth.bids" :key="index">
        <td>{{ bid[0] }}</td>
        <td>{{ bid[1] }}</td>
        <td>{{ (bid[0] * bid[1]).toFixed(8) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
