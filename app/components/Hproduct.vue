<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center mt-8">
      <h2 class="text-3xl font-bold uppercase tracking-wider">
        Thermal Printer
      </h2>

      <img src="/bt-i.png" class="mt-4" />
    </div>

    <div
      class="grid lg:grid-flow-col lg:grid-cols-4 grid-cols-1 gap-6 px-6 py-12"
      v-if="products.length > 0"
    >
      <div
        class="border-4 border-gray-200 hover:border-rongta"
        v-for="product in products"
        :key="product.slug"
      >
        <NuxtLink :to="`/product/${product.slug}`">
          <img :src="product.photo" :alt="product.name" style="width: 250px" />
          <p class="text-rongtatext text-sm font-semibold px-8 py-2">
            {{ product.name }}
          </p>
        </NuxtLink>
      </div>
    </div>

    <div v-else class="text-center py-12 text-gray-500">No products found.</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFetch } from "#app"; // Nuxt 4 built-in fetch composable

const products = ref([]);
const cat_id = [57];

async function getData() {
  const { data, error } = await useFetch(
    "https://admindash.comcitybd.com/api/brands/Rongta/4",
    {
      params: { id: cat_id },
    },
  );

  if (error.value) {
    console.error("API Error:", error.value);
    products.value = [];
  } else {
    products.value = data.value?.data || [];
  }
}

onMounted(() => {
  getData();
});
</script>
