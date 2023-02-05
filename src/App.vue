<script setup>

import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <Navbar v-if="!$route.meta.hideNavbar"></Navbar>

  <router-view></router-view>
</template>

