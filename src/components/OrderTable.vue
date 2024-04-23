<script setup lang="ts">
const props = defineProps({
  title: { type: String },
  data: { type: Object },
  limit: { type: Number }
})
</script>

<template>
  <div class="max-height-screen">
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
        <tr v-for="(bid, index) in data.slice(0, props.limit)" :key="index">
          <td>{{ bid[0] }}</td>
          <td class="hidden md:table-cell">{{ bid[1] }}</td>
          <td>{{ (bid[0] * bid[1]).toFixed(8) }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>
.v-table {
  max-height: 100vh;
}
.v-table__wrapper {
  overflow-x: hidden;
}
</style>
