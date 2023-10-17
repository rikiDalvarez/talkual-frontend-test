export default defineNuxtRouteMiddleware((to, _from) => {
  // TODO keep user connected
  const user = useStrapiUser();
  console.log("testing", user);
  if (!user.value) {
    useCookie("redirect", { path: "/" }).value = to.fullPath;
    return navigateTo("/");
  }
});
