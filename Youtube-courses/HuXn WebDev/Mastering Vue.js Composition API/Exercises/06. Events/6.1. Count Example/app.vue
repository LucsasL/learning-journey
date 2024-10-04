<!-- Events in Vue / Reactivity -->

<!-- Reactivity means that the framework can automatically update (UI) when the information behind it changes. It's a core concept that allows you to create dynamic and responsive applications without manually manipulating the DOM. -->

<!-- Reactive State -->

<!-- 
  - Reactivity()
  - Ref() 
-->

<!-- Javascript -->
<script setup>
  import {ref} from "vue";
  
  let count = ref(0);

  const incrementCounter = () => count.value++;
  const decrementCounter = () => count.value--;
</script>

<!-- HTML -->
<template>
  <div>
    <h1>
      Count: {{ count }}
    </h1>
  
    <!-- Old Way -->
    <!-- <button v-on:click="count++">Increment</button> -->

    <!-- New Way -->
    <button @:click="incrementCounter">Increment</button>
    <button @:click="decrementCounter">Decrement</button>
  </div>
</template>

<!-- CSS -->
<style>

</style>