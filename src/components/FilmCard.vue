<template>
  <div class="bg-red-100 text-gray-900 w-full md:w-full max-w-4xl rounded-xl overflow-hidden shadow-lg flex justify-between">
    <div class="md:flex-shrink-0">
      <img class="md:w-56"
           src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
           alt="A Quiet Place movie poster" />
    </div>
    <div class="flex flex-col flex-grow px-8 py-4 bg-color-333">
      <h3 class="font-bold text-4xl md:text-2xl lg:text-2xl">A Quiet Place</h3>
      <span class="text-xl lg:text-sm lg:mb-4 font-mono font-bold">2019</span>
      <div class="flex-grow">
        <p class="text-xl md:text-base lg:text-base leading-snug truncate-overflow">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur at minus nostrum. Aliquid animi assumenda at doloribus ea fuga ipsam laboriosam magnam nam quia sunt, temporibus totam vel voluptate?
        </p>
      </div>
      <div class="button-container flex justify-end mb-2">
        <router-link to="/reserve" class="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700">Reserve</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCard"
}
</script>

<style scoped>

</style>