const mongoose=require("mongoose");

const STRING_CONN = process.env.CONNECTION_STRING;

mongoose
  .connect(STRING_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB is CONNECTED!"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;