import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("Connected to mongo"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.log(err);
    });
};

export default connectDB;

//this opton needed to use the search functionality later in the project
