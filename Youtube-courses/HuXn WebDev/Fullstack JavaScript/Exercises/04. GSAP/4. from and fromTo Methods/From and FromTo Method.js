// From Method

// From Method: You don't have to specify the initial state (it will figure it out by itself)
gsap.from(".box1", {
  y: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});

// FromTo Method 

// fromTo Method: you have to specify the default value and also the new animation state.
gsap.fromTo(
  ".box2",
  {
    y: 200,
    opacity: 0,
  },
  {
    y: -200,
    opacity: 1,
    duration: 3,
    ease: "linear",
    repeat: -1,
  }
);