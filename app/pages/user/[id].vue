<script setup>
const route = useRoute();

const nuxt = useNuxtApp();
</script>

<template>
  <h2>i am user/[id] page</h2>
  <p>id is: {{ route.params.id }}</p>
</template>
