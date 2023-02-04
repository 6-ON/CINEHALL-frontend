<template>
  <!--  sideMenu-->
  <div class="relative z-50">
    <div @click="$emit('sidebar-close')" class="fixed inset-0 bg-gray-800 opacity-25"></div>
    <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
      <div class="flex items-center mb-8">
        <router-link @click="$emit('sidebar-close')" to="/" class="mr-auto text-3xl font-bold leading-none">
          <img src="/logo.png" class="h-12" alt="logo" >
        </router-link>
        <button class="navbar-close" @click="$emit('sidebar-close')">
          <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li class="mb-1">
            <router-link @click="$emit('sidebar-close')"
                exact-active-class="bg-red-50 text-red-600"
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-red-50 hover:text-red-600 rounded"
                to="/">Home
            </router-link>
          </li>
          <li class="mb-1">
            <router-link @click="$emit('sidebar-close')" to="/reserve"
                         exact-active-class="bg-red-50 text-red-600"
                         class="block p-4 text-sm font-semibold text-gray-400 hover:bg-red-50 hover:text-red-600 rounded">
              Reserve
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <div class="pt-6">
          <router-link @click="$emit('sidebar-close')" to="/login"
                       class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl">
            Sign in
          </router-link>
          <router-link @click="$emit('sidebar-close')" to="/register"
                       class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-600 hover:bg-red-700  rounded-xl">
            Sign Up
          </router-link>
        </div>
        <p class="my-4 text-xs text-center text-gray-400">
          <span>Copyright © 2021</span>
        </p>
      </div>
    </nav>
  </div>

</template>

<script>
export default {
  name: "Sidebar",
}
</script>

<style scoped>

</style>