<script setup>
import MainPage from "./components/MainPage.vue";
import NavBar from "./components/NavBar.vue";
import router from "./components/router";
</script>
<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>
<style></style>
