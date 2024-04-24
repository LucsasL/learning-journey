let timeline = gsap.timeline({
  defaults: {
    opacity: 0,
    duration: 1,
    ease: "linear",
  }
});

timeline.fromTo(
  ".sidebar",
  {
    width: 0,
  },
  {
    opacity: 1,
    width: "30%",
  }
);

timeline.fromTo(
  ".main-img",
  {
    x: 0
  },
  {
    opacity: 1
  }
);

timeline.fromTo(
  ".content",
  {
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
  }
);