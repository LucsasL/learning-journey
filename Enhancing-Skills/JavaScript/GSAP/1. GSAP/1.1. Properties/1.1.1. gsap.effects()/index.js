// gsap.effects() Method

import gsap from "gsap";

// Type: Object

// gsap.effects() is an object that stores the effects you use for your animations. It's a property stored in the gsap object, which is the main module of GSAP. You can register custom effects created by you, since them can be wrapped in a function. Once your effect is registered in the gsap.effects() you can access it by calling the name passed as the object property named "name".

// Registering an effect called "fade-out":
gsap.registerEffect({
  name: "fade-out",
  effect: (targets, config) => {
    return gsap.fromTo(targets, { opacity: 1 }, { opacity: 0 });
  },
  defaults: {
    duration: 2,
  },
}); // We call the gsap.registerEffect() passing an object as parameter, and specifying its properties

// Assumes that an effect named "explode" has already been registered

gsap.effects.explode(".box", {
  direction: "up", // Can reference any properties that the author decides - in this case "direction"
  duration: 3,
});
