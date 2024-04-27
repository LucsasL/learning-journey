function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Peanut Butter"), 1000);
    setTimeout(() => reject(), 1000);
  });
}

module.exports = fetchPromise;