function fetchData(callback) {
  setTimeout(() => {
    callback("Peanut Butter");
  }, 2000);
}

module.exports = fetchData;
