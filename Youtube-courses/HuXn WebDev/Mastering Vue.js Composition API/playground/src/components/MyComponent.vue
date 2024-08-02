<!-- JS -->
<script setup>
  const myGithub = "https://github.com/lucsasl";
  const imgAlt = "idk what to add"


  // -----------------------------------
  // Dynamic Binding

  const imageInfo = {
    src: "https://images.unsplash.com/photo-1699646034253-0ebaa551d226?q=80&w=2070&auto=format&fit=crop&ixlib=M3wxMjA3fDB8MHxwa690by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
</script>

<!-- HTML -->
<template>
  <!-- Old way -->
  <a v-bind:href="myGithub" :alt="imgAlt" target="_blank">Lucsas's Github</a> <br />
  
  <!-- New way -->
  <a :href="myGithub" :alt="imgAlt" target="_blank">Lucsas's Github</a>
</template>

<!-- CSS -->
<style>
  body {
    background: #060606;
  }

  a {
    color: blue;
    text-decoration: none;
  }
</style>