<!-- JS -->
<script setup>
  import anotherComponent from './anotherComponent.vue';
  console.log("Hello world!");
</script>

<!-- HTML -->
<template>
  <h1>Hello world!</h1>

  <h2>
    This is a Parent Component
  </h2>

  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque culpa minima iusto illum, dignissimos fuga modi ab deleniti repellat nemo distinctio laborum a magnam possimus ullam porro natus eligendi veniam.
  </p>

  <anotherComponent />
</template>

<!-- CSS -->
<style>
  h1 {
    color: red;
  }
</style>