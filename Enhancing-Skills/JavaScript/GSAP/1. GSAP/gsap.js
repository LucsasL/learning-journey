// This chapter aims to teach everything the gsap object has to offer, from basic properties and core concepts to internal plugins and methods that makes the GSAP library the way it is. As the documentation updates and new things get added, more things will be updated to these files for learning purposes (as the name refers).

// Tweens

// What's a tween in GSAP?

// A tween is basically a property setter, it receives an object's identifier (id, class, element, etc...), an object containing properties that will be changed, and a duration, then it procedes to interpret the properties of the specified object, and change the properties of the HTML element according to the values you passed on it respecting the duration.

// The following tween has all the required parameters

//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
gsap.to(".box1", {
  rotation: 27,
  x: 100,
  duration: 1,
});

// Timelines

// Timelines are containers for tweens, like a coreography, they load a sequence of animations back-to-back. They are useful for loading screens, since you can give a time to present the content to the viewer with impressive animation, rather than let them waiting in a boring and generic loading screen.

// The animation can be controlled by some methods like pause(), play(), progress(), reverse(), timeScale(), etc...

// You can also nest timelines, which is perfect considering you can use them as much as you want. Every tween and timeline you create is putted in a global timeline (globalTimeline by default). You can manipulate which animation will play first in the global timeline, giving complete control over the animations.

// Methods for creating a timeline:

// -> gsap.timeline()

// Sequencing things in a timeline

// Creating a timeline
let tl = gsap.timeline();

// Adding a tween
// tl.to(
//   ".box2", {
//     duration: 2,
//     x: 200,
//     rotation: 360,
//     opacity: 0.5
//   }
// )
// .to(".box2", {
//   duration: 2,
//   x: -200,
//   rotation: 0,
//   opacity: 1,
// });

// In the code above, we created an instance of a timeline (the variable "tl"), and immediately created a tween inside of it, attaching the tween to the timeline. By calling the gsap.to() function, you only create a standalone tween. By default, the animations will be sequenced one-after-the-other. You can even use method chaining to simplify your code like this:

// Sequenced one-after-the-other

// tl.to(".box1", { duration: 2, x: 100 }) // Notice that there's no semicolon!
//   .to(".box2", { duration: 1, y: 200 })
//   .to(".box3", { duration: 3, rotation: 360 });

// Control placement with the position parameter

// You can use an optional parameter to define exactly where your animation will be in the timeline. The value can be an absolute number or a string containing "+=" or "-=" as a prefix, the both mentioned meaning:

// += -> Overlap seconds before the end
// -= -> Overlap seconds before the end

// tl
// .to(".box1", 1.5, { duration: 2, rotation: 360 })
// .to(".box2", "-=0.75", { duration: 1, rotation: 360 }) // overlaps by 0.75 seconds
// .to(".box3", "+=1", { duration: 3, rotation: 360 }); // adds a 1-second gap before

// Labels

// Using labels allows you to mark certain spots for the animation to start in the timeline:

// Add a label at exactly 3 seconds
// tl.addLabel("step2", 3)
//   .to(".box1", "step2") // Starts at the step2 label
//   .to(".box1", "step2+=0.75"); // 0.75 seconds after the step2 label

// Then later, we can seek() to that spot:
// tl.seek("step2");

// Controlling tweens and timelines

// Some methods are used to control tweens and timeline animations:

// Create an instance of a tween and a timeline
const tween = gsap.to(
  ".box1", {
    duration: 2,
    x: 50,
  }
); 

const tl2 = gsap.timeline();

// Adding tweens to the timeline directly:
tl
  .to(".box1", { duration: 1, rotation: 150 })
  .to(".box1", { duration: 3, rotation: 50 })
  .to(".box1", { duration: 2, rotation: 250 })

// Now we can control them:
tween.pause();
tween.timeScale(2); // Double speed
tl.seek(3); // Jump to 3 seconds in
tl.progress(0.5); // Halfway through