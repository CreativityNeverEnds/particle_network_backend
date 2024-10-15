const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  from: {
    type: String,
  },
  message: {
    type: String,
  },
  roomID: {
    type: String,
  },
  sendtime: {
    type: String,
  },
  showstate: {
    type: Boolean,
  },
});

// Export the model with a name
module.exports = mongoose.model("Message", MessageSchema);