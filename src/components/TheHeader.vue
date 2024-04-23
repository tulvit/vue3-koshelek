<script setup lang="ts">
const props = defineProps({
  title: { type: String },
  links: { type: Array() }
})
</script>

<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <h1>{{ props.title }}</h1>
      <nav v-for="(link, i) in props.links" :key="i">
        <RouterLink :to="link.to">{{ link.title }}</RouterLink>
      </nav>
    </div>
  </header>
</template>
