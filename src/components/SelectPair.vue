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
  <select v-model="selected">
    <option v-for="(option, index) in props.options" :value="option.value" :key="index">
      {{ option.text }}
    </option>
  </select>
</template>
