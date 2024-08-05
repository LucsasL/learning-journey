import React from 'react';

function About() {
  return (
    <>
      <h1>About Us</h1>
    </>
  )
}

export default About;

export function generateMetadata() {
  return {
    title: "This is the about page",
    description: "idk man, i won't add anything, kind busy for this.",
  };
}