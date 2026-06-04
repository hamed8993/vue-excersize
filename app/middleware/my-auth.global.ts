export default defineNuxtRouteMiddleware((to, from) => {
  console.log("i am global auth middleware from 'my-auth.global.ts' file...");
  console.log("from>>", from);
  console.log("to>>", to);

  let isLoggedIn = true;
  //دقت شود که درسته زبان برا سایت ست شده ولی خودش اون پریفیکس زبان رو به اول اینا میچسبونه
  if (!isLoggedIn && to.path !== "/auth/login") {
    return navigateTo("/auth/login");
  }

  if (isLoggedIn && to.path === "/auth/login") {
    return navigateTo("/");
  }
});
