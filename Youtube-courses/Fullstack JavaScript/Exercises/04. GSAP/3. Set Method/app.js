gsap.set(".box", {
  opacity: 0,
});

gsap.to(".box", {
  opacity: 1,
  background: "red",
  boxShadow: "0px 0px 35px red",
  duration: 2,
  y: 100,
  repeat: -1,
  yoyo: true,
});