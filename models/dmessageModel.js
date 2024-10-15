const mongoose = require("mongoose");

const DMessageSchema = new mongoose.Schema({
  from: {
    type: String,
  },
  to: {
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
module.exports = mongoose.model("DMessage", DMessageSchema);