import { defineStore } from "pinia";

interface CounterState {
  counter: number;
}

export const useCounterStore = defineStore("myCounter", {
  state: (): CounterState => ({ counter: 0 }),
  getters: {
    doubledCount: (state: CounterState) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    reset() {
      this.counter = 0;
    },
  },
});
