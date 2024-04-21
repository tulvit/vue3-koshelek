<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useLogStore } from '@/stores/log'
import { useMarketDepthStore } from '@/stores/market'
import { useSymbolStore } from '@/stores/symbol'
import getDepth from '../comsolables/getDepth'

const props = defineProps(['options'])
const symbol = useSymbolStore()
const log = useLogStore()
const marketDepth = useMarketDepthStore()
const selected = ref(symbol.symbol.value || props.options[0].value)
const { depth, error, load } = getDepth()
load(selected.value)
symbol.set({ value: selected.value, title: selected.value })

watch(selected, (selected, prevSelected) => {
  log.push(prevSelected, selected)
  load(selected)
  symbol.set({ value: selected, title: selected })
})

watch(depth, () => {
  marketDepth.save(depth.value)
})
</script>

<template>
  <v-select label="Select" :items="options" v-model="selected"></v-select>
</template>
