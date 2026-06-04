export default defineNuxtRouteMiddleware((to, from) => {
  console.log("i am 'about-us auth' middleware. NOT global...");
});
