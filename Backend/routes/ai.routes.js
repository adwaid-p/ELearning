const express = require("express");
const router = express.Router()
const aiController = require("../controllers/ai.controller")

router.post('/getCourse', aiController.GetCourse)

module.exports = router;