<!-- JS -->
<script setup>

</script>

<!-- HTML -->
<template>
  <div>
    <h1 class="text-red">Global Styling</h1>
    <p class="local">Trying local scope in this component</p>
  </div>
</template>

<!-- CSS, Global Style -->

<!-- The global style it's already set when you use the style tag to determine the properties of the elements -->
<style>
  body {
    background: #060606;
    color: white;
  }

  a {
    color: blue;
    text-decoration: none;
  }

  .text-red {
    color: red;
  }

  .local {
    color: blueviolet;
  }
</style>