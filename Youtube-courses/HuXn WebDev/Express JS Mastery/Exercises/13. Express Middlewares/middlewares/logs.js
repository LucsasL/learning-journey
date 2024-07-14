function userCredentials(req, res, next) {
  console.log("Username: (alex)");
  console.log("Email: (alex21@gmail.com)");
  console.log("Password: (12345)");
  console.log("Age: (19)");
  next();
}

export default userCredentials;
