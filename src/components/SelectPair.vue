<script setup lang="ts">
import { ref, watch } from 'vue'
import { useLogStore } from '@/stores/log'
import { useSymbolStore } from '@/stores/symbol'

const props = defineProps(['options'])
const symbol = useSymbolStore()
const log = useLogStore()
const selected = ref(symbol.symbol.value)

watch(selected, (selected, prevSelected) => {
  log.push(prevSelected, selected)
  symbol.set({ value: selected, title: selected })
})
</script>

<template>
  <v-select label="Select" :items="props.options" v-model="selected"></v-select>
</template>
