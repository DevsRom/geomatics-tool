// backend/tests/dataController.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /data', () => {
    it('should return processed data', async () => {
        const res = await request(app).get('/data');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('data');
    });
});