const express = require('express');
const rateLimit = require('express-rate-limit');
const controller = require('../controllers/enquiries.controller');
const router = express.Router();
const enquiryLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 20, standardHeaders: true, legacyHeaders: false });
router.post('/', enquiryLimiter, express.json({ limit: '20kb' }), controller.create);
module.exports = router;
