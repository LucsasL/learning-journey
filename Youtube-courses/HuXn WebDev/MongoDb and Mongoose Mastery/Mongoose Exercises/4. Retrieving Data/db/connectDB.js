// Importing Mongoose
import mongoose from "mongoose";

// Creating Functions that tries to connect to the database
const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected!");
    
  } catch (error) {
    console.log(error);
  }
}

// Exporting the function
export default connectDB;