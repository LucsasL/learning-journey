// Routing

// Routing is like giving directions to a website. When you type a web addres (URL) into your browser, routing tells the website which page or thing to show you. It's like a map that guides the website to the right place when you click a link or enter a web address. So, routing helps the website know what to display based on what you're looking for.

// Basic Routing

// https://localhost:3000/about

// You need to specify the folder name as you want the route to be, so if you want to create an about route, you need to specify the folder name as "about" and you has to have the "page.js" in it

// /about: page.js

import React from 'react';

function About() {
  return (
    <div>About</div>
  );
}

export default About;