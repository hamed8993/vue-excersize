export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayHello: (arg: string) => console.log(`hello from log plugin... ${arg}`),
    },
  };
});
