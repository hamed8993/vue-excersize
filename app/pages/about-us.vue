<script setup>
import Header from "~/components/share/header.vue";
// import DefaultButton from "~/components/default-button.vue";
import { useLog } from "./../composables/my-log";
// import { useLog } from "./../composables/use-log";

definePageMeta({
  layout: "custom-layout",
  middleware: "about-us-auth",
});
useLog("hamed!");

const { $sayHello } = useNuxtApp();

$sayHello("hamed from about us page");
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
