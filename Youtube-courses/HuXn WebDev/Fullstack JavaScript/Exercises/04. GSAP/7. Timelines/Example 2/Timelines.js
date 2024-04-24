let timeline = gsap.timeline({
  default: {
    duration: 1,
  }
});

timeline
  .to("h1", {
    y: -100,
    color: "wheat",
  })
  .to(".box1", {
    x: -100,
    background: "lightblue",
    boxShadow: "0px 0px 35px lightblue",
  })
  .to(".box2", {
    y: 100,
    background: "pink",
    boxShadow: "0px 0px 35px pink",
  })
  .to(".box3", {
    x: 100,
    background: "#d7afff",
    boxShadow: "0px 0px 35px #d7afff",
  });