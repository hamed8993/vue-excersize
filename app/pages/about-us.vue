<script setup>
import Header from "~/components/share/header.vue";

// import DefaultButton from "~/components/default-button.vue";

definePageMeta({
  layout: "custom-layout",
});
</script>
<template>
  <div>
    <h3>about us page</h3>
    <IconsLoadingIcon />
    <Header />
    <DefaultButton />
    <InputsAdminSwitchButton />
  </div>
</template>
