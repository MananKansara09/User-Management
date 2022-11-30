const mongoose = require("mongoose");
const db = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    // mongodb connection string
    // const con = await mongoose.connect(process.env.MONGO_URI, (err) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log("connected to MongoDB");
    // });

    await mongoose.connect(`${db}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
