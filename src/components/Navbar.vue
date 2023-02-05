<script>
import Sidebar from "@/components/Sidebar.vue";
import sidebar from "@/components/Sidebar.vue";

export default {
  name: "Navbar",
  components: {Sidebar},
  data() {
    return {
      sidebarShown: false,
    }
  },
  computed:{

  },
  methods: {
    toggleMenu() {
      this.sidebarShown = !this.sidebarShown
    }
  }
}
</script>


<template>

  <header :class="$route.meta.navbarFixed" class=" w-full z-10 font-sans">
    <nav class="relative px-4 py-4 flex justify-between items-center bg-white bg-opacity-60 backdrop-blur rounded-b-3xl">
      <router-link to="/" class="text-3xl font-bold leading-none">
        <img src="/logo.png" alt="logo" class="w-6">
      </router-link>
      <div class="lg:hidden">
        <button @click="toggleMenu" class="flex items-center text-red-600 p-3">
          <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul class="text-gray-500 hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <router-link exact-active-class="text-red-600 font-bold" to="/" class="text-sm">Home</router-link>
        </li>
        <li>
          <router-link exact-active-class="text-red-600 font-bold" to="/films" class="text-sm">Films</router-link>
        </li>

      </ul>
      <router-link to="/login"
                   class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200">
        Sign In
      </router-link>
      <router-link to="/register"
                   class="hidden lg:inline-block py-2 px-6 bg-red-500 hover:bg-red-600 text-sm text-white font-bold rounded-xl transition duration-200">
        Sign up
      </router-link>
    </nav>
  </header>
  <!--  sidebar-->
  <sidebar v-if="sidebarShown" @sidebar-close="toggleMenu"></sidebar>
</template>


<style scoped>
</style>