// backend/routes/dataRoutes.js
const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

router.get('/data', dataController.getData);
router.post('/upload', dataController.uploadData);

module.exports = router;