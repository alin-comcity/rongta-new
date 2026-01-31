<template>
  <div>
    <!-- Loader -->
    <div class="spin-container" v-if="loading">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <!-- Product -->
    <div class="container mx-auto" v-if="product">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 p-6 md:p-16">
        <div class="border border-gray-200">
          <img :src="product.photo" :alt="product.name" class="w-full" />
        </div>

        <div>
          <h2 class="font-bold text-2xl text-rongtatext break-words">
            {{ product.name }}
          </h2>

          <p
            class="font-semibold text-rongtatext mt-6"
            v-html="product.short"
          />

          <div class="mt-8">
            <a
              :href="`https://comcitybd.com/product/${slug}`"
              class="bg-rongta text-white px-6 py-3 hover:bg-gray-700"
              target="_blank"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div
      class="bg-gray-800 text-white font-semibold uppercase flex justify-center px-4 py-4"
    >
      <div class="px-8">
        <button @click="selectTab(1)" :class="{ tabstate: currentTab === 1 }">
          Description
        </button>
      </div>

      <div class="px-8">
        <button @click="selectTab(2)" :class="{ tabstate: currentTab === 2 }">
          Specification
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div class="px-8 container mx-auto">
      <div v-if="currentTab == 1" class="tabpanel">
        <div class="px-10 py-6" v-html="product.details"></div>
      </div>

      <div v-if="currentTab === 2">
        <div class="px-10 py-6" v-html="product.short"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useHead } from "#imports";
import { useFetch } from "#app";

// route
const route = useRoute();
const slug = ref(route.params.slug);

// state
const product = ref(null);
const loading = ref(false);
const currentTab = ref(1);

// SEO
useHead(() => ({
  title: `Rongta | ${slug.value}`,
  meta: [
    {
      name: "description",
      content: "Home page description",
    },
  ],
}));

// fetch product
const getProduct = async () => {
  loading.value = true;

  const { data, error } = await useFetch(
    `https://admindash.comcitybd.com/api/product/${slug.value}`,
    {
      key: `product-${slug.value}`,
    },
  );

  if (error.value) {
    console.error("API Error:", error.value);
    product.value = null;
  } else {
    product.value = data.value;
  }

  loading.value = false;
};

// watch slug change
watch(
  () => route.params.slug,
  (newSlug) => {
    slug.value = newSlug;
    getProduct();
  },
);

// initial load
getProduct();

// tabs
function selectTab(tab) {
  currentTab.value = tab;
}
</script>

<style>
.tabstate {
  border-bottom: 3px solid #f08200;
}
</style>
