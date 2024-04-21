<script setup lang="ts">
import { ref, watch } from 'vue'
import { useLogStore } from '@/stores/log'

const props = defineProps(['options'])
const log = useLogStore()

const selected = ref(props.options[0].value || '')

watch(selected, (selected, prevSelected) => {
  log.push(prevSelected, selected)
})
</script>

<template>
  <v-select label="Select" :items="options" v-model="selected"></v-select>
</template>
