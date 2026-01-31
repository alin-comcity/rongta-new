<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center mt-8">
      <h2 class="text-3xl font-bold uppercase tracking-wider">All Products</h2>

      <img src="/bt-i.png" class="mt-4" />
    </div>

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
import axios from "axios";

// reactive variables
const products = ref([]);
const category = ref("thermal-printer");
const cat_id = ref([57, 9, 56]);

// fetch data function
const getData = async () => {
  try {
    const response = await axios.get(
      "https://admindash.comcitybd.com/api/brands/Rongta/20",
      {
        params: { id: cat_id.value },
      },
    );
    console.log(response.data);
    products.value = response.data.data;
  } catch (err) {
    console.error("API Error:", err);
    products.value = [];
  }
};

// fetch data on mounted
onMounted(() => {
  getData();
});
</script>
