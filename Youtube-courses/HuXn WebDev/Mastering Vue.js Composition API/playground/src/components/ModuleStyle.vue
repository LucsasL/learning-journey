<template>
  <!-- Using v-bind -->

  <!-- It's necessary to add brackets ([]) to a style class -->
  <!-- <h1 v-bind:class="$style['m-class']">Using Module CSS with $ syntax (kabak-case)</h1> -->
  
  <!-- Using modern binding -->

  <!-- Determine the name of the module to use it (It's named in the module attribute in the style tag) -->
  <h1 :class="myClasses.anotherClass">Using Module CSS with $ syntax (camelCase)</h1>
</template>

<!-- Module Attribute / Flag -->

<!--  -->

<style module="myClasses">
  /* Kabak-case */
  .m-class {
    background: firebrick;
    color: white;
  }

  .anotherClass {
    background: seagreen;
    color: white;
  }
</style>