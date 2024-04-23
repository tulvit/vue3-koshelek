<script setup lang="ts">
const props = defineProps({
  title: { type: String },
  data: { type: Object },
  limit: { type: Number }
})
</script>

<template>
  <h3>{{ props.title }}</h3>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Price</th>
        <th class="text-left">Amount</th>
        <th class="text-left">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(bid, index) in data.slice(0, props.limit)" :key="index">
        <td>{{ bid[0] }}</td>
        <td>{{ bid[1] }}</td>
        <td>{{ (bid[0] * bid[1]).toFixed(8) }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
