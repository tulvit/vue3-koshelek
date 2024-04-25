<script setup lang="ts">
const props = defineProps({
  title: { type: String },
  data: { type: Object }
})
</script>

<template>
  <div class="max-height-screen md:w-3/6">
    <h3 class="font-bold uppercase">{{ props.title }}</h3>
    <v-table class="bg-slate-500" fixed-header max-height="100vh">
      <thead class="bg-slate-300">
        <tr>
          <th class="text-left">Price</th>
          <th class="text-left hidden md:table-cell">Amount</th>
          <th class="text-left">Total</th>
        </tr>
      </thead>
      <tbody class="bg-slate-200">
        <tr v-for="(bid, index) in data" :key="index">
          <td class="w-1/3">{{ bid[0] }}</td>
          <td class="hidden md:table-cell w-1/3">{{ bid[1] }}</td>
          <td class="w-1/3">{{ (bid[0] * bid[1]).toFixed(8) }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>
.v-table {
  max-height: 95vh;
}
.v-table__wrapper {
  overflow-x: hidden;
}
</style>
