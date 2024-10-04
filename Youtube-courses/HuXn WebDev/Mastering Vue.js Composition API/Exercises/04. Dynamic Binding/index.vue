<!-- Dynamic Binding -->

<!-- You can simplify your attributes even more using dynamic binding: by not specifing the attribute and putting an object with the exact same name as the properties you want to change   -->

<!-- JS -->
<script setup>
  const myGithub = "https://github.com/lucsasl";

  // -----------------------------------
  // Dynamic Binding

  const imageInfo = {
    src: "https://images.unsplash.com/photo-1699646034253-0ebaa551d226?q=80&w=2070&auto=format&fit=crop&ixlib=M3wxMjA3fDB8MHxwa690by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Idk what to add here too",
    width: "400px",
    height: "400px",
  }

  const relText = "noopener noreferrer";
</script>

<!-- HTML -->
<template>
  <!-- Non-Dynamic way -->
  <a :href="myGithub" :rel="relText" target="_blank">Lucsas's Github</a>

  <!-- Dynamic Binding -->
  <img :="imageInfo" />
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