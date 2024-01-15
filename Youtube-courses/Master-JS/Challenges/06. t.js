// 1. Create variable name (password) store nothing.
let password;

// 2. If password is equal to 8 character long print "Welcome"
if (password.length() === 8) {
  console.log("Welcome");

// 3. If password is less than 8 character long print "Password is too short"
} else if (password.length() < 8) {
  console.log("Password is too short.");

// 4. If password is greater than 8 character long print "Too long password" and "Password should be 8 characters"""
} else if (password.length() > 8) {
  console.log("Too long password.");

// 5. If all fails print "Please provide a password."
} else {
    console.log("Please provide a password.")

}