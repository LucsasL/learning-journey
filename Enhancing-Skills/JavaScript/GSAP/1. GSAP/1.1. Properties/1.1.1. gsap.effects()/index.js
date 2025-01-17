// gsap.effects() Method

// Type: Object

// gsap.effects() is an object that stores the custom effects you use for your animations. It's a property stored in the gsap object, which is the main module of GSAP. You can register custom effects created by you, since it can be wrapped in a function. Once your effect is registered in the gsap.effects() you can access it by calling the name passed as the object property named "name".

// Registering an effect called "fadeOut":
gsap.registerEffect({
  name: "fadeOut",
  effect: (targets, config) => {
    return gsap.fromTo(
      targets,
      { opacity: 1, duration: config.duration },
      { opacity: 0 }
    );
  },
  defaults: {
    duration: 5,
  },
}); // We call the gsap.registerEffect() passing an object as parameter, and specifying its properties

// Using the custom effect
gsap.effects.fadeOut(".box1", {
  direction: "up", // You can use any properties for the animation
  duration: 5,
});

// You can also use ``extendTimeline`` property on the effect object to true, to be able to call it directly into timelines, this way you can have the result of the effect at any time. Effects make it easy for anyone to author custom animation code wrapped in a function (accepting a targets, for the elements animated and a config, used for configuration of properties).

// Considering an example effect called "fade":

// Registering effect called "fade":
gsap.registerEffect({
  name: "fade",
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      x: config.x,
      y: config.y,
      opacity: config.opacity,
    });
  },
  defaults: { duration: 3, x: 0, y: 0, opacity: 0 },
  extendTimeline: true, // Setting this property to true allows us to call this effect in any GSAP Timeline, having the desired effect whenever we want
});

// Calling registered effect:
gsap.effects.fade(".box2", {
  duration: 3,
  x: 100,
  y: 45,
  opacity: 0,
}); // Since we passed a default settings in the registration of the effect, we don't need to specify an object (config) for the targets, since it would be redundant, but since I'm learning, I choose to do so.

// Calling the effect in a timeline
const tl = gsap.timeline();

tl.fade(".box1", { duration: 3, opacity: 0, x: 50 })
  .fade(".box2", { duration: 4 })
  .to(".box3", { x: 100 });

// GSAP provides 4 key services here:

// -> It parses the "targets" into an array. So if selector text is passed in, it becomes an array of elements passed to the effect function.

// -> It applies defaults to the config object every time. No need to add a bunch of if statements or apply the defaults yourself.

// -> If you set extendTimeline: true, the effect's name will be added as a method to GSAP's Timeline prototype, meaning that you can insert an instance of that effect directly into any timeline like:

// With extendTimeline: true
var tl2 = gsap.timeline();
tl2.yourEffect(".class", { configProp: "value" }, "+=position");

// Without extendTimeline: true, you'd have to do this to add an instance to the timeline:
tl2.add(
  gsap.effects.yourEffect(".class", { configProp: "value" }),
  "+=position"
);