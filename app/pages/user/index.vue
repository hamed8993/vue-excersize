<script setup>
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

const target = useTemplateRef("target");

onClickOutside(target, (event) => alert("clicked OUTSIDE!!"));

const handleClick = (event) => {
  // بررسی اینکه در سمت کلاینت هستیم
  if (process.client) {
    alert("clicked inside me!");
  }
};
</script>

<template>
  <h2>i am user page (index.vue)</h2>
  <h3>use of <code>vueuse</code> package:</h3>

  <div
    @click="handleClick"
    ref="target"
    class="w-50 h-50 border-2 border-red-600 rounded-sm"
  >
    click in me and see <code>INSIDE</code> alert!
  </div>
</template>
