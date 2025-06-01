const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, default: "recruiter" },
  company: String,
  savedCandidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  shortlistedCandidates: [
    { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ],
  rejectedCandidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

// ✅ Prevent OverwriteModelError
module.exports =
  mongoose.models.Recruiter || mongoose.model("Recruiter", recruiterSchema);
