<!-- reactive() function -->

<!-- The reactive function is used to create reactive objects. A reactive object is an object where changes to its properties are automatically detected. triggering updates in the user interface (UI). It is a way to make an object "reactive" in Vue.js. -->

<!-- ❌ Can't store primitive data types ❌ -->

<!-- You should use data structures as parameters to use reactive() -->

<script setup>
import { reactive } from 'vue'

let initialState = reactive({ count: 0, user: ['Irineu', 'Jordan'] })

const changeUser = () => {
  initialState.user[0] = "Michael";
  initialState.user[1] = "Philip"
}
</script>

<!-- Events in Vue -->

<template>
  <div>
    <h1>Count: {{ initialState.count }}</h1>

    <button @click="initialState.count++">+</button>
    <button @click="initialState.count--">-</button>
  </div>

  <div>
    <h2>
      Users: {{ initialState.user }}
    </h2>

    <button @click="initialState.count += 10">Add 10</button>
    <button @click="changeUser">Change User</button>
    <button @click="initialState.user.push('John Doe')">Add One More</button>
  </div>
</template>

<style></style>
