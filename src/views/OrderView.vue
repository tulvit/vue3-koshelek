<script setup lang="ts">
import { ref } from 'vue'

import OrderBook from '../components/OrderBook.vue'

const props = defineProps({ title: { type: String } })
</script>

<template>
  <main>
    <h1>{{ props.title }}</h1>
    <OrderBook title="Order book" />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
