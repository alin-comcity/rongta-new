<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center mt-8">
      <h2 class="text-3xl font-bold uppercase tracking-wider">Solution</h2>

      <img src="/bt-i.png" class="mt-4" />
    </div>

    <div class="px-12">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-indigo-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1
                class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"
              >
                Solution Secnarios with Rongta Products
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                With Rongta products, you will get different types of solution
                for your business. Rongta offers product lines which are fit for
                your logistics, point of sales, inventory management and others
              </p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/catering.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Catering
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Food is the paramount necessity of people. Chinese catering
                industry has experienced more than 30 years of development and
                market competition and still keep growing fast. Nowadays,
                catering industry has entered a new stage of investment entities
                diversification.
              </p>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/logistics.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Logistics
              </h2>
              <p class="text-base leading-relaxed mt-2">
                In recent years, with the deepening of global and regional
                economic integration, and the widespread use of information
                technology
              </p>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/retail.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Retail
              </h2>
              <p class="text-base leading-relaxed mt-2">
                The global retail industry thrives as economic, technological
                and social trends evolve and change. Driven by science and
                technology,the new intelligent retail mode has gradually become
                popular. The new retail mode, which based on customization,
                intelligence and cooperation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "#imports";

useHead({
  title: "Rongta Bangladesh | Solution",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "Rongta Solution",
      content:
        "With Rongta products, you will get different types of solution for your business. Rongta offers product lines which are fit for your logistics",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/fav.png" }],
});
</script>
