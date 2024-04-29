test("Spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  // toHaveBeenCalled() Method: It checks if the function has been called.
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});