<template>
  <div>
    <Header class="hidden lg:block" @custom-search="searchs" />
    <Mobilenav class="block lg:hidden" />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  data() {
    return {
      showSearch: false,
      mydata: "",
    };
  },
  created() {
    // this.$nuxt.$on("customSearch", ($event) => this.searchs($event));
  },
  methods: {
    searchs(event) {
      console.log(event);
      this.$router.push({ path: `/search/${event}` });
    },

    test(e) {
      console.log(e);
    },
  },

  head: {
    title: "Rongta Bangladesh | Receipt & Thermal Printers",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "Rongta Bangladesh",
        content: "Point of Sales Solution in Bangladesh",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/fav.png" }],
  },
};
</script>
