// backend/services/dataService.js
const { exec } = require('child_process');

exports.processAndSaveData = async (data) => {
    return new Promise((resolve, reject) => {
        exec(`python3 scripts/data_processing.py ${data.inputFile} ${data.outputFile}`, (error, stdout, stderr) => {
            if (error) {
                reject(`Error processing data: ${stderr}`);
            } else {
                resolve(stdout);
            }
        });
    });
};