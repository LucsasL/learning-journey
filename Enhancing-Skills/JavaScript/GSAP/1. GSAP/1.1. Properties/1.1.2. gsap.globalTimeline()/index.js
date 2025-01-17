// gsap.globalTimeline() Method

// Type: Timeline

// gsap.globalTimeline is the instance that drives everything in GSAP, making it an essential concept to learn;

// Useful methods:

// -> gsap.globalTimeline .pause() - Pauses the global timeline which affects ALL the animations. Returns itself.

// -> gsap.globalTimeline .pause() - Resumes the global timeline which affects ALL the animations. Returns itself.

// -> gsap.globalTimeline .paused() - returns true if the globalTimeline is paused, and false if the globalTimeline is playing.

// -> gsap.globalTimeline.timeScale() - Gets or sets the global time scale which is a multiplier that affects ALL animations. This doesn't actually set the timeScale() of each individual tween/timeline, but rather it affects the rate at which the root timeline plays (that timeline contains all other animations). This is a great way to globally speed up or slow down all animations at once. For example:

gsap.globalTimeline.timeScale(0.5); // Plays at half speed
gsap.globalTimeline.timeScale(2); // Plays at double speed
var currentTimeScale = gsap.globalTimeline.timeScale(); // Returns the current global timeScale

// Notes:

// -> Keep in mind that since the global timeline is used to run all other tweens and timelines, gsap.globalTimeline.isActive() will always return true regardless of whether or not there are any tweens or timelines currently active.