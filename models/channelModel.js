const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema({
  creator: {
    type: String,
  },
  channelname: {
    type: String,
  },
  visitors: {
    type: Array,
  }
});

// Export the model with a name
module.exports = mongoose.model("Channel", ChannelSchema);