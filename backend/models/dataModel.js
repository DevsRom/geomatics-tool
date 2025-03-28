const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Data', dataSchema);