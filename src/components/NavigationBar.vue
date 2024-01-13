<!--
  * Filename: NavigationBar.vue
  * Author: Huy Nguyen
  * Date: December 25, 2023
  * Description: Contains the implementation of the navigation bar, containing the logo that redirects the user to the home page
-->

<template>
  <nav
    class="flex flex-row sticky top-0 p-4 height-[60px] bg-gray-700 justify-between items-center border-b-2 border-cyan-500/80 z-50"
  >
    <router-link :to="{ name: 'home' }">
      <div class="flex flex-row gap-4 items-center">
        <img
          src="../assets/icons/logo-512x512.png"
          width="48"
          height="48"
        />
        <p class="text-2xl font-light text-amber-50 font-logo">GIFFY</p>
      </div>
    </router-link>

    <a
      href="https://giphy.com"
      target="_blank"
      class="flex items-center justify-center gap-2"
    >
      <img
        src="../assets/acknowledgements/Poweredby_100px-Black_VertLogo.png"
      />
      <i class="fa-solid fa-external-link text-white" />
    </a>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
