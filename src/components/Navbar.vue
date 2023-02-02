<template>
<nav class="flex gap-3 justify-center">
  <router-link to="/login">login</router-link>
  <router-link to="/register">register</router-link>
  <router-link to="/">home</router-link>
  <router-link to="/reserve">reserve</router-link>

</nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>