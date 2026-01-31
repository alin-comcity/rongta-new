<script setup>
import { ref } from "vue";

const abouts = ref([
  {
    year: "2009",
    cname: "Established",
    icon: "/calendar.png",
  },
  {
    year: "20000+",
    cname: "Area",
    icon: "/building.png",
  },
  {
    year: "5000+",
    cname: "Distributors",
    icon: "/flag.png",
  },
  {
    year: "600+",
    cname: "Customers (Mil)",
    icon: "/user.png",
  },
]);
</script>

<template>
  <div class="col-span-1">
    <div class="bg-[#f08200] opacity-95 h-full grid grid-flow-row">
      <div class="flex justify-end flex-col px-6">
        <h2 class="text-white uppercase lg:text-3xl text-lg font-bold">
          About Rongta
        </h2>
        <img src="/line.png" class="w-16" />
      </div>
      <div class="grid grid-cols-2 justify-items-center">
        <div
          class="col-span-1 flex flex-col lg:gap-12 gap-6"
          v-for="(about, index) in abouts"
          :key="index"
        >
          <div class="flex gap-2">
            <div
              class="border border-white rounded flex items-center justify-center lg:w-20 lg:h-20 w-16 h-16"
            >
              <img :src="about.icon" class="lg:w-12 w-8" />
            </div>
            <div class="uppercase text-white">
              <h2 class="font-bold lg:text-4xl text-lg">
                {{ about.year }}
              </h2>
              <p class="lg:text-sm text-xs py-2">{{ about.cname }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
