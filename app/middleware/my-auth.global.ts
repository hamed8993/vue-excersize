export default defineNuxtRouteMiddleware((to, from) => {
  console.log("i am global auth middleware from 'my-auth.global.ts' file...");
  console.log("from>>", from);
  console.log("to>>", to);

  let isLoggedIn = true;

  if (!isLoggedIn && to.path !== "/auth/login") {
    return navigateTo("/auth/login");
  }

  if (isLoggedIn && to.path === "/auth/login") {
    return navigateTo("/");
  }
});
