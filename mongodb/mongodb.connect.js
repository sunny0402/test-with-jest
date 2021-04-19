const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://sunny:4455WRX@cluster0.fg4yn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (err) {
    console.error(err);
    console.error("Error connecting to mongodb");
  }
}

module.exports = { connect };
//mongodb+srv:sunny:4455WRX@cluster0.fg4yn.mongodb.net/test_with_jest_1?retryWrites=true&w=majority
