<template lang="">
  <div class="min-h-screen h-0 space-y-12">
    <div
      class="flex h-20 items-center justify-between px-20 shadow-md bg-white"
    >
      <h2 class="font-bold text-2xl">Where in the world ?</h2>
      <div class="flex space-x-2">
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
        <span> Dark Mode</span>
      </div>
    </div>
    <div class="px-20 lg:flex justify-between">
      <div
        class="flex flex-1 max-w-lg relative h-15 shadow bg-white items-center rounded mb-6 pr-10"
      >
        <div class="flex -mr-px justify-center w-15 p-4">
          <span
            class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
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
          type="text"
          class="flex-shrink flex-grow flex-auto text-sm leading-normal w-px border-none rounded focus:ring-0 px-3 self-center relative font-roboto outline-none"
          placeholder="Search for a country..."
        />
      </div>
      <div class="">
        <select
          name=""
          id=""
          class="w-48 text-sm border-none rounded focus:ring-0 h-15 shadow bg-white items-center py-4 mb-6 pr-10"
        >
          <option value="1">Filter by Region</option>
          <option value="1">Africa</option>
          <option value="1">America</option>
          <option value="1">Asia</option>
          <option value="1">Europe</option>
        </select>
      </div>
    </div>
    <div
      class="grid md:grid-cols-2 xl:grid-cols-4 gap-36 place-items-center px-20"
    >
      <div>
        <div class="shadow">
          <img src="https://flagcdn.com/w320/et.png" alt="" srcset="" />

          <div class="bg-white p-6">
            <div class="space-y-2">
              <div class="font-bold text-xl">Ethiopia</div>
              <div class="text-sm space-y-1">
                <div>Population:</div>
                <div>Region:</div>
                <div>Capital:</div>
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
    }
  },

  created() {
    Country.all().then(response => { console.log(response) }).catch(err => { console.log(err) })
  },


};
</script>
<style lang=""></style>
