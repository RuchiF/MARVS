const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String, default: "user" }, // 'user' or 'recruiter'
  name: String,
  avatar: String,
  pitch: String,
  profile: {
    resumeUrl: String,
    education: String,
    experience: String,
    skills: [String],
    projects: [String],
    certifications: [String],
  },

  analytics: {
    views: { type: Number, default: 0 },
    clicks: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    bookmarks: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model("User", userSchema);
