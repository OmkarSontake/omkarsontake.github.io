<template>
  <SiteHeader></SiteHeader>
  <NuxtPage></NuxtPage>
  <SiteFooter></SiteFooter>
</template>
<script setup>
onMounted(() => {
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return "";
  }

  function displayWelcomeMessage() {
    const lastVisit = getCookie("lastVisit");
    if (lastVisit) {
      const date = new Date(Number(lastVisit));
      alert("Welcome back! Your last visit was " + date.toLocaleString());
    } else {
      const currentDate = new Date();
      setCookie("lastVisit", currentDate.getTime(), 30); // Set the cookie to expire in 30 days
      alert("Welcome to my homepage!");
    }
  }

  displayWelcomeMessage();


})

</script>

<style></style>