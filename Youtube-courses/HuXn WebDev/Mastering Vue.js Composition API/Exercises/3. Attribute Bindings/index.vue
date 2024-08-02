<!-- Attribute Bindings -->

<!-- Attribute binding is a way to bind HTML -->

<!-- Attribute to data in Vue instance. -->

<!-- Old way 👇 -->

<!-- v-bind: attr -->

<!-- New way 👇 -->

<!-- :attr -->

<!-- JS -->
<script setup>
  const myGithub = "https://github.com/lucsasl";
  const imgAlt = "idk what to add"
</script>

<!-- HTML -->
<template>
  <!-- Old way 👇 -->
  <a v-bind:href="myGithub" :alt="imgAlt" target="_blank">Lucsas's Github</a> <br />
  
  <!-- New way 👇 -->
  <a :href="myGithub" :alt="imgAlt" target="_blank">Lucsas's Github</a>
</template>

<!-- CSS -->
<style>
  
</style>