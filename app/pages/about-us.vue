<script setup>
import Header from "~/components/share/header.vue";
// import DefaultButton from "~/components/default-button.vue";
import { useLog } from "./../composables/my-log";
// import { useLog } from "./../composables/use-log";

definePageMeta({
  layout: "custom-layout",
});

useLog("hamed!");
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
