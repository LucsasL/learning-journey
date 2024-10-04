<!-- Computed Properties -->

<!--
 A computed property is a special kind of variable that automatically updates itself whenever the data it depends on changes.

 It's like a little worker that watches certain data, performs some work on it, and always gives you the most up-to-date result.
-->

<script setup>
import { ref, computed } from 'vue'

// Squared Number Example
const number = ref(5)

const squaredNumber = computed(() => {
  return number.value * number.value;
})

// Name Example
let firstName = ref("Irineu")
let lastName = ref("Nusabi")
const fullName = computed(() => {
  return firstName.value + " " + lastName.value
})

// Count Example
const counter = ref(0)
const squaredCounter = computed(() => counter.value ** 2)
</script>

<template>
  <div>
    <!-- Squared Number Example -->
    <h1>Original Number: {{ number }}</h1>
    <h1>Squared Number: {{ squaredNumber }}</h1>
  </div>

  <div>
    <!-- Name Example -->
     <h1>First Name: {{ firstName }}</h1>
     <h1>Last Name: {{ lastName }}</h1>
     <h1>Full Name: {{ fullName }}</h1>
  </div>

  <div>
    <!-- Count Example -->
   <h1>Count: {{ counter }}</h1>
   
   <p>Squared Counter: {{ squaredCounter }}</p>

   <button @click="counter++">Increment</button>
   <button @click="counter--">Decrement</button>
  </div>
</template>

<style></style>
