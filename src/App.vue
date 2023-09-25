<script setup>
import "@/index.css";
import MainPage from "@/pages/MainPage.vue";
</script>
<template>
  <header class="absolute left-0 right-0 container w-full mx-auto px-5 py-6.25">
    <img alt="delivery logo" class="logo" src="./assets/logo.svg"/>
  </header>
  <main>
    <!-- TODO: replace with router-view -->
    <main-page/>
  </main>
  <footer class="container mx-auto">
    <div class="lg:w-2/4 flex flex-row-reverse max-sm:flex-col justify-between px-6.25 py-10 gap-6">
      <div class="flex gap-2.5">
        <img src="./assets/logo-visa.svg" alt="visa logo">
        <img src="./assets/logo-mastercard.svg" alt="mastercard logo">
        <img src="./assets/logo-maestro.svg" alt="maestro logo">
        <img src="./assets/logo-processing.svg" alt="processing logo">
      </div>
      <p class="text-sm font-roboto text-secondary">
        All rights reserved<br>Fast service 2021
      </p>
    </div>
  </footer>
</template>
