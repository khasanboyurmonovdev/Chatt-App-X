import mongoose from "mongoose";
const connectToMnogoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Errror connecting to MongoDB", error.message);
  }
};
export default connectToMnogoDB;
/*
   await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
 */
