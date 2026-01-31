<script setup>
import { ref } from "vue";

const showSearch = ref(false);
const showMenu = ref(false);

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div>
    <div class="grid grid-flow-col grid-cols-2 relative p-4">
      <div>
        <div class="col-span-1 flex items-center justify-start">
          <NuxtLink to="/">
            <img src="/logo.png" class="w-20" />
          </NuxtLink>
        </div>
      </div>

      <div class="col-span-1 flex justify-end items-center">
        <div class="px-3" @click="toggleSearch">
          <img src="/search.svg" class="w-5" />
        </div>

        <div class="px-3" @click="toggleMenu">
          <img src="/ham.png" class="w-5" />
        </div>
      </div>
      <transition
        enter-active-class="transition ease-out duration-300"
        enter-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          class="grid grid-flow-col grid-cols-8 absolute -bottom-4 right-6 gap-1"
          v-if="showSearch"
        >
          <div class="col-span-7">
            <form
              class="inline"
              @submit.prevent="$nuxt.$emit('customSearch', query)"
            >
              <input
                class="border px-2 rounded"
                type="text"
                placeholder="Search.."
                v-model="query"
              />
              <span>
                <button type="submit" class="bg-rongta p-1 rounded">
                  <img src="/search.svg" class="h-4" />
                </button>
              </span>
            </form>
          </div>

          <div class="col-span-1">
            <button class="bg-rongta p-1 rounded" @click="toggleSearch">
              <img src="/close.svg" class="h-4" />
            </button>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition ease-out duration-300"
        enter-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-200"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div class="absolute bg-white top-20 left-0 w-full" v-if="showMenu">
          <ul class="uppercase">
            <li class="px-2 py-2 border-b text-sm font-bold border-slate-100">
              <NuxtLink class="hover:text-rongta" to="/">Home</NuxtLink>
            </li>
            <li
              class="px-2 py-2 block border-b text-sm font-bold border-slate-100"
            >
              <NuxtLink class="hover:text-rongta" to="/about"
                >About Us</NuxtLink
              >
            </li>
            <li
              class="px-2 py-2 border-b block text-sm font-bold border-slate-100"
            >
              <NuxtLink class="hover:text-rongta" to="/product"
                >Products</NuxtLink
              >
            </li>
            <li
              class="px-2 py-2 border-b block text-sm font-bold border-slate-100"
            >
              <NuxtLink class="hover:text-rongta" to="/solution"
                >Solution</NuxtLink
              >
            </li>
            <li class="px-2 py-2 block text-sm font-bold">
              <NuxtLink class="hover:text-rongta" to="/contact"
                >Contact Us</NuxtLink
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>
