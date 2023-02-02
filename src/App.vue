<script setup>

import Navbar from "@/components/Navbar.vue";
import {ref} from "vue";

const isAdmin = ref()
</script>

<template>
  <Navbar></Navbar>
<router-view></router-view>
</template>

