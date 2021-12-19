<template lang="">
  <div :class="{ 'dark bg-gray-800 text-white': nightMode }" class="h-screen space-y-12">
    <div
      class="flex h-20 items-center justify-between px-20 shadow-md bg-white dark:bg-gray-700"
    >
      <div class="flex justify-between items-center space-x-3 dark:text-white">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
        ></span>
        <span class="font-bold xl:text-3xl"> Where in the world ?</span>
      </div>
      <div class="flex space-x-2 cursor-pointer dark:text-white">
        <div
          class="flex space-x-2 items-center"
          v-if="!nightMode"
          @click="nightMode = !nightMode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <span class="text-sm">Dark mode</span>
        </div>

        <div
          class="flex space-x-2 items-center"
          v-else
          @click="nightMode = !nightMode"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span class="text-sm">Light mode</span>
        </div>
      </div>
    </div>
    <div class="px-20">
      <router-link :to="{ name: 'home' }">
        <button class="dark:bg-gray-700  rounded bg-white space-x-2 flex shadow px-7 py-2">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              /></svg
          ></span>
          <span>Back</span>
        </button>
      </router-link>
    </div>
    <div class="px-20">
      <div v-if="country.length !== 0">
        <div class="xl:flex items-center justify-evenly">
          <div class="border">
            <img class="xl:h-96" :src="country.flags.png" alt="" srcset="" />
          </div>
          <div class="space-y-4">
            <div class="text-5xl font-bold">{{ country.name }}</div>
            <div class="flex space-x-20">
              <div class="space-y-2">
                <div class=" ">
                  <span>Native Name: </span>
                  <span class="dark:text-white text-gray-700 font-thin">
                    {{ country.nativeName }}
                  </span>
                </div>
                <div class=" ">
                  <span>population: </span>
                  <span class="dark:text-white text-gray-700 font-thin">
                    {{ country.population.toLocaleString() }}
                  </span>
                </div>
                <div class=" ">
                  <span>Region: </span>
                  <span class="dark:text-white text-gray-700 font-thin">
                    {{ country.region }}
                  </span>
                </div>
                <div class=" ">
                  <span>Sub Region: </span>
                  <span class="dark:text-white text-gray-700 font-thin">
                    {{ country.subregion }}
                  </span>
                </div>
                <div class=" ">
                  <span>capital: </span>
                  <span class="dark:text-white text-gray-700 font-thin">
                    {{ country.capital }}
                  </span>
                </div>
              </div>
              <div class="space-y-2">
                <div class=" ">
                  <span>Top Level Domain: </span>
                  <span
                    class="dark:text-white text-gray-700 font-thin"
                    v-for="tld in country.topLevelDomain"
                    :key="tld"
                  >
                    {{ tld }}
                  </span>
                </div>
                <div class=" ">
                  <span>Currencies: </span>
                  <span
                    class="dark:text-white text-gray-700 font-thin"
                    v-for="currency in country.currencies"
                    :key="currency"
                  >
                    {{ currency.code }}
                  </span>
                </div>
                <div class="">
                  <span class="">Languages: </span>
                  <span
                    class="dark:text-white text-gray-700 font-thin"
                    v-for="language in country.languages"
                    :key="language"
                  >
                    {{ language.name }}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div class="flex flex-wrap text-sm items-center space-x-2">
                <span> Border Countries:</span>
                <div
                  class="flex"
                  v-for="border in country.borders"
                  :key="border"
                >
                  <span class="shadow-md dark:bg-white px-6 py-1 font-normal
                   text-gray-700">{{
                    border
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Country from "../apis/Country";
export default {
  props: ["name"],
  data() {
    return {
      country: [],
      nightMode: JSON.parse(localStorage.getItem("nightMode")) || false,
    };
  },

  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    },
  },

  computed: {},

  mounted() {
    Country.show(this.name)
      .then((response) => {
        this.country = response.data[0];
        console.log(this.country);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  created() {},

  methods: {},
};
</script>
<style lang=""></style>
