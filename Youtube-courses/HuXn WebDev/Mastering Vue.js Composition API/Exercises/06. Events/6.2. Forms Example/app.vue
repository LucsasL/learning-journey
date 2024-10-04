<script setup>
  // import { ref } from "vue";

  const submitHandler = (e) => {
    e.preventDefault();

    alert("Valid Credentials");
  }
</script>

<!-- Events in Vue -->

<template>
  <div>
    <form @:submit="submitHandler">
      <input type="text" placeholder="Please enter your name" /> 
      <br />

      <input type="email" placeholder="Please enter your email" /> 
      <br />
      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style>

</style>