const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: { type: String, trim: true, required: true },
  lastName: { type: String, trim: true, required: true },
  emailId: { type: String, trim: true, required: true, unique: true },
  password: { type: String },
  phone: { type: Number },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

//give singular name when defining schema, Plural name will become in mongodb
module.exports = mongoose.model("user", userSchema);