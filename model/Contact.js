// require mongoose
const mongoose = require("mongoose");
// require Schema
const { Schema } = mongoose;
// create contactSchema
const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,
});

module.exports = Contact = mongoose.model("contact", contactSchema);
