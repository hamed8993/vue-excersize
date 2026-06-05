<script setup>
import { useCounterStore } from "./../stores/my-store";

const { increment, decrement, reset } = useCounterStore();
const store = useCounterStore();
const { counter, doubledCount } = storeToRefs(store);
</script>

<template>
  <div class="container p-4">
    <p>
      your score: <code>{{ counter }}</code>
    </p>
    <p>
      your Doubled score: <code>{{ doubledCount }}</code>
    </p>
    <div class="flex gap-3 justify-between">
      <button @click="increment()" class="px-5 py-2 rounded-sm bg-green-600">
        +
      </button>
      <button @click="decrement()" class="px-5 py-2 rounded-sm bg-red-600">
        -
      </button>
      <hr />
      <button @click="reset()" class="px-5 py-2 rounded-sm bg-orange-600">
        Reset!
      </button>
    </div>
  </div>

  <div class="border-2 border-red-700 rounded-sm p-4 flex gap-3">
    <img class="w-100 h-auto" src="/store.png" alt="store" />
    <img class="w-100 h-auto" src="/code.png" alt="code" />
  </div>
</template>
