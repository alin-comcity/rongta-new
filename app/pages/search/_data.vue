<template>
  <div class="container mx-auto">
    <h3 class="px-6 font-semibold uppercase mt-8">
      Search Result For "{{ query }}"
    </h3>

    <!-- Products Grid -->
    <div
      class="grid lg:grid-cols-4 grid-cols-1 gap-6 px-6 py-12"
      v-if="products.length > 0"
    >
      <div
        class="border-4 border-gray-200 hover:border-rongta"
        v-for="product in products"
        :key="product.slug"
      >
        <NuxtLink :to="`/product/${product.slug}`">
          <img :src="product.thumbnail" alt="Casing" style="width: 250px" />
          <p class="text-rongtatext text-sm font-semibold px-8 py-2">
            {{ product.name }}
          </p>
        </NuxtLink>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 py-12">No results found.</div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useFetch } from "#app";

const route = useRoute();
const query = ref(route.params.data);
const products = ref([]);

// Function to fetch search results
async function fetchProducts(slug) {
  const { data, error, refresh } = await useFetch(
    `https://admindash.comcitybd.com/api/customsearch/Rongta/${slug}`,
  );

  if (error.value) {
    console.error("API Error:", error.value);
    products.value = [];
  } else {
    products.value = data.value?.data || [];
  }

  return refresh;
}

// initial fetch
let refreshFn = await fetchProducts(query.value);

// watch route changes
watch(
  () => route.params.data,
  async (newSlug) => {
    query.value = newSlug;
    if (refreshFn) await fetchProducts(newSlug);
  },
);
</script>
