const request = require('supertest');
const app = require('../app');

test('should return stat data', async () => {
  await request(app).get('/stats')
    .send()
    .expect(200);
});
