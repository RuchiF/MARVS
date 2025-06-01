const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  getCandidates,
  shortlistCandidate,
  rejectCandidate,
  getShortlistedCandidates,
  getRejectedCandidates,
} = require("../controllers/recruiterController");

// Existing: View all / filtered candidates
router.get("/candidates", auth, role("recruiter"), getCandidates);

// New:
router.post(
  "/candidates/:id/shortlist",
  auth,
  role("recruiter"),
  shortlistCandidate
);
router.post("/candidates/:id/reject", auth, role("recruiter"), rejectCandidate);

// Optional:
router.get("/shortlisted", auth, role("recruiter"), getShortlistedCandidates);
router.get("/rejected", auth, role("recruiter"), getRejectedCandidates);

module.exports = router;
