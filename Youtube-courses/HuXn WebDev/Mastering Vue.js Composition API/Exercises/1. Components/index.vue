<!-- What is Component? -->

<!-- A component is a reusable and self-contained unit that encapsulates a specific piece of functionality or user interface. Components are a fundamental building block of Vue applications, and they allow you to organize and structure your code in a modular way. -->

<!-- In simple terms -->

<!-- A component is like a building block for your website. Imagine it as a small reusable part of your webpage that you can easily use in different places. It's like a Lego block that you can use over and over again to build different things -->

<!-- Analogy -->

<!-- Imagine you're building a website about travel. You might have different sections like a header with the logo and navigation links, a main section with destination information, and a sidebar with travel tips. In Vue, each of these sections can be a component. -->

<!-- So, a component in this context is like a building block for your website. You have a header component, a main content component, a sidebar component, and so on. Each component does it job well, and you can combine them to create a complete and functional travel website. -->

<!-- Why Components? -->

<!-- Modularity -->

<!-- Components allow you to break down your application into smaller, reusable pieces. Each component is responsible for a specific feature or functionality, making it easier to understand and maintain your code -->

<!-- Reusability -->

<!-- Components can be reused across different parts of your application or even in multiple projects. This reusability reduces redundancy in your code and speeds up development. -->

<!-- Maintainability -->

<!-- With components, it's easier to manage and maintain your codebase. Each component is a self-contained unit with it own functionality, making it simpler to troubleshoot and update. -->

<!-- Scalability -->

<!-- As your application grows, components make it easier to scale. You can add new features by creating new components, and existing components can be modified or replaced without affecting the entire application. -->

<!-- Readability -->

<!-- Breaking down the user interface into components improves code readability. Developers can quickly understand the purpose and functionality of each component, making it easier to collaborate on projects. -->

<!-- Customization -->

<!-- Components can be customized and configured with props, allowing for a high level of flexibility. This makes it easy to reuse components with different data or settings -->

<!-- app.vue code -->

<script setup>
import HelloWorld from './components/helloWorld.vue';
</script>

<template>
  <HelloWorld />
</template>

<style scope>

</style>

<!-- helloworld.vue code -->

<!-- JS -->
<script setup>
  console.log("Hello world!");
</script>

<!-- HTML -->
<template>
  <h1>Hello world!</h1>
</template>

<!-- CSS -->
<style>
  h1 {
    color: red;
  }
</style>