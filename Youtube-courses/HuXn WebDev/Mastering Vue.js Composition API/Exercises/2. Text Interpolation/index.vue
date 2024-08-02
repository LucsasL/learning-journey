<!-- Text Interpolation {{}} -->

<!-- Text Interpolation in refers to the process of dynamically binding data to the content of an HTML element in your template. It allows you to display the value of a JavaScript expression or a variable within the markup. -->

<!-- Syntax -->

<!-- {{ data }} -->

<!-- JS -->
<script setup>
  console.log("Hello world!");
  const myMessage = "Yellow world!";
  const myNumber = 100;

  function add(x = 0, y = 0) {
    return x + y;
  }
</script>

<!-- HTML -->
<template>
  <h1>This is some text</h1>

  <h2>
    And this is text Interpolation: {{ myMessage }}
  </h2>

  <h3>{{ myNumber }}</h3>

  <h3>2 + 2 = {{ 2 + 2 }}</h3>

  <h3>
    5 + 2 = {{ add(5, 2) }}
  </h3>

  <!-- <p>Not allowed: {{ const myName = "Irineu"; }} </p> -->
</template>

<!-- CSS -->
<style>
  h1 {
    color: red;
  }
</style>