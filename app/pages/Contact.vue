<script setup>
useHead({
  title: "Contact Us",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "Send us a mail",
      content: "We are here to hear from you",
    },
  ],
});

// form state
const customername = ref("");
const email = ref("");
const message = ref("");
const honeyPot = ref(false);
const showThanks = ref(false);

// send mail function
const sendMail = async () => {
  try {
    const response = await $fetch("https://formspree.io/f/mojlvdbj", {
      method: "POST",
      body: {
        name: customername.value,
        email: email.value,
        message: message.value,
        _honeypot: honeyPot.value,
      },
    });

    console.log(response);
    showThanks.value = true;
  } catch (err) {
    console.error("Form submission error:", err);
  }
};

// toggle thanks popup
const toggleThanks = () => {
  showThanks.value = !showThanks.value;
};
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col items-center mt-8">
      <h2 class="text-3xl font-bold uppercase tracking-wider">Contact Us</h2>

      <img src="/bt-i.png" class="mt-4" />
    </div>

    <div class="px-12 py-10">
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-2 mx-auto">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <form method="post" @submit.prevent="sendMail">
              <input
                v-model="honeyPot"
                type="checkbox"
                style="display: none"
                name="honeyPot"
                tabindex="-1"
                autocomplete="off"
              />

              <div class="flex flex-wrap -m-2">
                <div class="p-2 lg:w-1/2 w-2/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600"
                      >Name</label
                    >
                    <input
                      v-model="customername"
                      required
                      type="text"
                      id="name"
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 lg:w-1/2 w-2/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600"
                      >Email</label
                    >
                    <input
                      required
                      v-model="email"
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="message" class="leading-7 text-sm text-gray-600"
                      >Message</label
                    >
                    <textarea
                      required
                      v-model="message"
                      id="message"
                      name="message"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button
                    class="flex mx-auto text-white bg-gray-700 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg"
                  >
                    Send
                  </button>
                </div>
                <div
                  id="alert-1"
                  class="flex w-full p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200"
                  role="alert"
                  v-if="showThanks"
                >
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div
                    class="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800"
                  >
                    Your Email Has Been Sent!
                  </div>
                  <button
                    @click="toggleThanks"
                    type="button"
                    class="ml-auto -mx-1.5 -my-1.5 bg-gray-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300"
                    data-collapse-toggle="alert-1"
                    aria-label="Close"
                  >
                    <span class="sr-only">Close</span>
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
                >
                  <p class="leading-normal my-5">
                    75-76, B.S. Bhaban, 3rd Floor
                    <br />Laboratory Road Dhaka-1205, Bangladesh <br />Tel: +880
                    2 9612629-30 .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
