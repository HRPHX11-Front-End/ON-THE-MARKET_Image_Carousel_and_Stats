const request = require('supertest');
const app = require('../app');

test('should return description data', async () => {
  await request(app).get('/description')
    .send()
    .expect(200);
});
