<script setup>
import { ref } from 'vue';

// First Example
const isTrue = false
const isFalse = false

// Second Example
let isVisible = ref(true)

// Third Example
let isUserLoggedIn = ref(true)
let username = "irineu"
let showDetails = ref(isUserLoggedIn)

// Fourth Example
const isActive = ref(true)

// Fifth Example
let password = ref(0)

</script>

<template>
  <!-- First Example: v-if -->
  <div>
    <p v-if="isTrue">
      This will be shown if "isTrue" is true.
    </p>

    <p v-else-if="isFalse">This will be shown if "isFalse" is true.</p>
    <p v-else>This will be shown if neither "isTrue" nor "isFalse" is true.</p>
  </div> 

  <!-- Second Example: v-show -->
  <div>
    <p v-show="isVisible">This paragraph will be shown or hidden based on the value of "isVisible"</p>
    
    <button @click="isVisible = !isVisible">Toggle Visibility</button>
  </div>
  
  <!-- Third Example: all conditionals -->
  <div>
    <h1 v-if="isUserLoggedIn">Welcome, {{ username }}</h1>

    <p v-else>Please login to access this content</p>

    <div v-show="showDetails">
      <h4>You're now able to modify your dashboard</h4>
    </div>

    <button @click="isUserLoggedIn = !isUserLoggedIn">{{ isUserLoggedIn ? "Logoff" : "Login" }}</button>
  </div>

  <!-- Fourth Example: v-if 2 -->
  <div v-if="isActive">
    <h1>My Blog Post</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum possimus deserunt facilis atque numquam exercitationem vel quos animi molestiae!</p>
  </div>

  <button @click="isActive = !isActive">Toggle Post</button>

  <!-- Fifth Example:  -->
   <div>
    <h1 v-if="password.length >= 8">Strong Password</h1>
    <h1 v-else-if="password.length < 8">Weak Password</h1>
    <h1 v-else>Please Enter Your Password</h1>

    <input type="text" @change="(e) => password = e.target.value" placeholder="Your password..." />
   </div>
</template>

<style></style>
