<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
  title: { type: String },
  links: { type: Array() }
})
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="text-xl bg-red-600">test</div>
      <h1 class="text-xl">{{ props.title }}</h1>
      <nav v-for="(link, i) in props.links" :key="i">
        <RouterLink :to="link.to">{{ link.title }}</RouterLink>
      </nav>
    </div>
  </header>
</template>
