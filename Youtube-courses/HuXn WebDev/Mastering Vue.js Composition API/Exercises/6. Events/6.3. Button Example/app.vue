<script setup>
  const showMessage = (msg) => alert(msg);
</script>

<!-- Events in Vue -->

<template>
  <div>
    <button @click="showMessage('This is my message')">Show Message</button>
  </div>
</template>

<style>

</style>