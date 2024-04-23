<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
  title: { type: String },
  links: { type: Array() }
})
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="flex gap-x-5 align-center">
        <img alt="logo" class="logo" src="@/assets/logo.svg" width="75" height="75" />
        <h1 class="text-xl capitalize">{{ props.title }}</h1>
      </div>
      <nav class="my-10">
        <RouterLink
          v-for="(link, i) in props.links"
          :key="i"
          :to="link.to"
          class="active:bg-green-300 bg-green-500 hover:bg-green-700 p-2 font-bold text-white mr-5 inline-block uppercase rounded"
          activeClass="border-solid border-l-4 border-green-700"
          >{{ link.title }}</RouterLink
        >
      </nav>
    </div>
  </header>
</template>
