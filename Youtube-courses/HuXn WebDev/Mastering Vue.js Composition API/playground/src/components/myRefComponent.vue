<script setup>
import { reactive, ref } from 'vue'

let count = ref(0)
let username = ref('')
let users = ref(['Michael', 'Jordan', 'Irineu', 'John'])
let userInfo = ref({ name: 'Alex', age: 20, location: ['NYC', 'IDK'], isMarried: false });
let friends = reactive([ref("Jordan"), ref("Alex"), ref("Irineu")]);
</script>

<!-- Events in Vue -->

<template>
  <div>
    <h1>Count: {{ count }}</h1>

    <button @click="count++">+</button>
    <button @click="count--">-</button>
  </div>

  <div>
    <h2>Username: {{ username }}</h2>

    <button @click="username = 'Jordan'">Add User</button>
  </div>

  <div>
    <h1>Users List: {{ users }}</h1>

    <button @click="users.push('Doe ')">Add User</button>
  </div>

  <div>
    <h2>User Info:</h2>

    <ul>
      <li>Name: {{ userInfo.name }}</li>
      <li>Age: {{ userInfo.age }}</li>
      <li>Location 1: {{ userInfo.location[0] }}</li>
      <li>Location 2: {{ userInfo.location[1] }}</li>
      <li>Is Married: {{ userInfo.isMarried }}</li>
    </ul>

    <button @click="userInfo.name = 'irineu'">Change Name</button>
    <button @click="userInfo.age = 40">Change Age</button>
    <button @click="userInfo.location = ['Earth', 'meh']">Change location</button>
    <button @click="userInfo.isMarried = true">Change Status</button>
  </div>

  <div>
    <h2>1. {{ friends[0] }}</h2>
    <h2>2. {{ friends[1] }}</h2>
    <h2>3. {{ friends[2] }}</h2>

    <button @click="friends[0] = '🤝'">Hand Shake</button>
    <button @click="friends[1] = '🤝'">Hand Shake</button>
    <button @click="friends[2] = '🤝'">Hand Shake</button>
  </div>
</template>

<style></style>
