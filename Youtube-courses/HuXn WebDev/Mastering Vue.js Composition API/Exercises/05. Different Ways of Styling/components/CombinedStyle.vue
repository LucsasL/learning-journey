<template>
  <h2 class="g-1">Another global style</h2>
  <h2 class="l-1">Another local style</h2>
</template>

<!-- Global Styling -->
<style>
  .g-1 {
    background: fuchsia;
  }
</style>

<!-- Local Styling -->
<style scoped>
  .l-1 {
    background: #000;
    color: wheat;
  }
</style>