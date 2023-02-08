<template>

  <div class="flex max-sm:flex-col bg-amber-200 rounded overflow-hidden shadow hover:shadow-lg sm:max-h-64">
    <img class="w-64 h-64 max-sm:w-full max-sm:h-96 object-cover" :src="info.image" alt="">
    <div class="flex flex-col gap-3 p-2 max-h-64">
      <h3 class="text-2xl font-bold">{{ info.label }}</h3>
      <h4 class="font-mono">{{ info.hall }}</h4>
      <p class="max-h-24 text-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem beatae
        consectetur delectus, dignissimos distinctio eveniet fuga, laborum officia porro suscipit temporibus voluptate!
        Ad consequatur doloribus ipsa quae sit.</p>
      <router-link :to="{name: 'reserve',query: { film:info.id } }"
                   class="bg-red-500 rounded-full w-fit px-6 py-2 self-end text-white hover:text-red-500 hover:bg-amber-100 hover:shadow">
        Reserve
      </router-link>
    </div>
  </div>


</template>

<script>
export default {
  props: {
    info: {
      id: Number,
      label: String,
      image: String,
      hall: String
    }
  },
  name: "FilmCard"
}
</script>

<style scoped>

</style>