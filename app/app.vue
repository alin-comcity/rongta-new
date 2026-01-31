<script setup>
const router = useRouter();

useHead({
  title: "Rongta Bangladesh | Receipt & Thermal Printers",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "Rongta Bangladesh",
      content:
        "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from rongta.com.bd",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/fav.png" }],
});
</script>

<template>
  <Header class="hidden lg:block" />
  <Mobilenav class="block lg:hidden" />
  <NuxtPage />
  <Footer />
</template>

//@custom-search="search"
