const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  getProfile,
  updateProfile,
  incrementAnalytics,
  updatePitch,
  getAnalytics,
  uploadResume,
  getPublicProfile,
  getPublicPitch,
} = require("../controllers/userController");

// Public routes (no auth)
router.get("/profile/:id", getPublicProfile);
router.get("/pitch/:id", getPublicPitch);

// Protected routes
router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);
router.post("/pitch", auth, updatePitch);
router.get("/analytics", auth, getAnalytics);
router.post("/resume", auth, uploadResume);

// Analytics (public increment)
router.post("/analytics/:id", incrementAnalytics);

module.exports = router;
