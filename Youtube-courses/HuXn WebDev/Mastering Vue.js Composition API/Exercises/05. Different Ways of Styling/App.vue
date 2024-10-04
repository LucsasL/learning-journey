<script setup>
import GlobalStyle from './components/GlobalStyle.vue';
import LocalStyle from './components/LocalStyle.vue';
import CombinedStyle from './components/CombinedStyle.vue';
import ModuleStyle from './components/ModuleStyle.vue';
</script>

<template>
  <GlobalStyle />
  <LocalStyle />
  <CombinedStyle />
  <ModuleStyle />
</template>

<style>
  body {
    background: #101010;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>