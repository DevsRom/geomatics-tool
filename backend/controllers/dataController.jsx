// backend/controllers/dataController.js
const dataService = require('../services/dataService');

exports.uploadData = async (req, res) => {
    try {
        const newData = await dataService.processAndSaveData(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(500).send(error.message);
    }
};