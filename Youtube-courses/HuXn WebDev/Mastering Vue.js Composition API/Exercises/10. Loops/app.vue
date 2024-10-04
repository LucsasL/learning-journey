<!-- v-for -->

<!-- 
  The v-for directive is used to iterate over an array or an object and render a template for each item in the collection.
-->

<!-- Example -->

<script setup>
import { ref } from "vue"

let people = ref(["Alex", "Jordan", "Irineu"])
</script>

<template>
  <p v-for="(person, index) in people" :key="index">{{ person }}</p>
</template>

<!--
  The index variable taken in the for iteration set is optional, it's used to write a key in each one of the iterated elements
-->

<!-- Why :key? -->

<!-- Efficient DOM Updates -->

<!-- 
  - When we renders a list of elements, it uses a virtual DOM to determine the most efficient way to update the actual DOM. The key helps Vue identify which elements have changed, been added, or been removed.
  
  - Without keys, Vue may need to recreate the entire DOM structure for each update, which can be less efficient.
-->

<!-- Avoiding Common Pitfalls -->

<!-- 
  - Using key can help avoid common pitfalls, such as duplicate key warnings in the console or incorrect rendering when items are rearranged in the list.

  - Vue relies on keys to track the identify of elements, and using unique keys for each item ensures that Vue can accurately update the DOM based on changes in the list.
-->