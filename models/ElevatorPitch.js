const mongoose = require("mongoose");

const pitchSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  videoUrl: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ElevatorPitch", pitchSchema);
