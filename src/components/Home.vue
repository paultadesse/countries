<template lang="">
  <div :class="{ 'dark bg-gray-800': nightMode }" class="h-full space-y-12">
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
    <div class="px-20 lg:flex justify-between">
      <div
        class="flex flex-1 max-w-lg relative h-15 shadow dark:bg-gray-700 bg-white items-center rounded mb-6 pr-10"
      >
        <div class="flex -mr-px justify-center w-15 p-4">
          <span
            class="flex items-center leading-normal dark:bg-gray-700 bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <input
          v-model="countryKeyWord"
          type="text"
          class="flex-shrink dark:text-white dark:bg-gray-700 flex-grow flex-auto text-sm leading-normal w-px border-none rounded focus:ring-0 px-3 self-center relative font-roboto outline-none"
          placeholder="Search for a country..."
        />

        <div
          v-show="countryKeyWord.length !== 0"
          class="absolute top-14 bg-gray-white border bg-white w-full h-72 overflow-y-scroll"
        >
          <div class="text-sm p-1 uppercase text-gray-500">search results</div>
          <ul v-show="searchResults.length !== 0" class="p-4 space-y-4">
            <li v-for="searchResult in searchResults" :key="searchResult.name">
              <router-link
                :to="{ name: 'detail', params: { name: searchResult.name } }"
              >
                {{ searchResult.name }}
              </router-link>
            </li>
          </ul>
          <div
            v-show="searchResults.length === 0"
            class="text-sm p-1 uppercase text-gray-500"
          >
            not found
          </div>
        </div>
      </div>
      <div class="relative max-w-lg space-y-2">
        <div
          class="shadow py-3 rounded px-2 flex items-center justify-between dark:bg-gray-700"
          @click="regionFilterShow = !regionFilterShow"
        >
          <input
            @change="filterByRegion(selectedRegion)"
            name=""
            id=""
            disabled
            v-model="selectedRegion"
            class="w-48 dark:bg-gray-700 dark:text-white text-sm outline-none px-3 border-none rounded focus:ring-0 bg-white items-center"
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-show="!regionFilterShow"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />

              <path
                v-show="regionFilterShow"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 15l7-7 7 7"
              /></svg
          ></span>
        </div>

        <div
          v-show="regionFilterShow"
          class="absolute top-16 bg-white w-full p-4 space-y-3 text-sm rounded shadow-md cursor-pointer"
        >
          <div @click="filterByRegion('all'), (selectedRegion = 'All')">
            All
          </div>
          <div @click="filterByRegion('africa'), (selectedRegion = 'Africa')">
            Africa
          </div>
          <div
            @click="filterByRegion('americas'), (selectedRegion = 'Americas')"
          >
            Americas
          </div>
          <div @click="filterByRegion('asia'), (selectedRegion = 'Asia')">
            Asia
          </div>
          <div @click="filterByRegion('europe'), (selectedRegion = 'Europe')">
            Europe
          </div>
        </div>
        <div class="text-sm text-gray-400 space-x-2">
          <span>Found :</span>
          <span class="font-bold text-gray-600 dark:text-white">{{
            filteredCountries.length
          }}</span>
          Results
        </div>
      </div>
    </div>

    <div
      class="grid md:grid-cols-2 xl:grid-cols-4 gap-28 place-items-center px-20"
    >
      <div class="" v-for="(country, index) in filteredCountries" :key="index">
        <div class="rounded-lg shadow-lg dark:bg-gray-700">
          <transition
            duration="500"
            enter-class="transform -translate-x-96 opacity-0 scale-0"
            enter-to-class="transform translate-x-0 opacity-90 scale-100"
            leave-class="transform translate-x-0 opacity-100"
            leave-to-class="transform translate-x-96 opacity-0"
            enter-active-class="transition"
            leave-active-class="transition"
            mode="out-in"
          >
            <img
              :key="country.flags.png"
              class="h-52 rounded-t-lg"
              :src="country.flags.png"
              alt=""
              srcset=""
            />
          </transition>

          <div class="p-6">
            <div class="space-y-4">
              <div class="font-bold text-xl">
                <span class="dark:text-white">
                  <router-link
                    :to="{ name: 'detail', params: { name: country.name } }"
                  >
                    {{ country.name }}
                  </router-link>
                </span>
                <img
                  class="h-6 w-8"
                  :src="country.flags.png"
                  alt=""
                  srcset=""
                />
              </div>
              <hr />
              <div class="text-sm space-y-3 ml-2">
                <div class="space-x-2">
                  <span class="text-xs uppercase text-gray-500 dark:text-white"
                    >Population:</span
                  >
                  <span
                    class="bg-gray-200 text-black font-semibold text-xs rounded px-2 py-1"
                    >{{ country.population.toLocaleString() }}</span
                  >
                </div>
                <div class="space-x-2">
                  <span class="text-xs uppercase text-gray-500 dark:text-white"
                    >Region:</span
                  >
                  <span
                    class="bg-gray-200 text-black font-semibold text-xs rounded px-2 py-1"
                    >{{ country.region }}</span
                  >
                </div>
                <div class="space-x-2">
                  <span class="text-xs uppercase text-gray-500 dark:text-white"
                    >Capital:</span
                  >
                  <span
                    class="bg-gray-200 text-black font-semibold text-xs rounded px-2 py-1"
                    >{{ country.capital }}</span
                  >
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
  data() {
    return {
      countries: [],
      regionFilterShow: false,
      selectedRegion: "All",
      filteredCountries: [],
      countryKeyWord: "",
      nightMode: JSON.parse(localStorage.getItem("nightMode")) || false,
    };
  },

  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    },
  },

  computed: {
    searchResults() {
      if (this.countryKeyWord.length === 0) {
        return "";
      }

      return this.countries.filter((country) => {
        return country.name
          .toLowerCase()
          .match(this.countryKeyWord.toLowerCase());
      });
    },
  },

  created() {
    // this.nightMode = JSON.parse(localStorage.getItem("nightMode"))
    Country.all()
      .then((response) => {
        this.countries = response.data;
        this.filteredCountries = this.countries;
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    filterByRegion(event) {
      this.regionFilterShow = !this.regionFilterShow;
      if (event !== "all") {
        let countriesBasedOnRegion = this.countries.filter((country) => {
          return country.region.toLowerCase().includes(event.toLowerCase());
        });
        this.filteredCountries = countriesBasedOnRegion;
      } else {
        this.filteredCountries = this.countries;
      }
    },
  },
};
</script>
<style lang=""></style>
