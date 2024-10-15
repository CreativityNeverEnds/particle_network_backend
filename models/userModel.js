const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  secondName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  walletAddress: {
    type: String,
    required: true,
    unique: true,
  },
});

// Export the model with a name
module.exports = mongoose.model("User", UserSchema);