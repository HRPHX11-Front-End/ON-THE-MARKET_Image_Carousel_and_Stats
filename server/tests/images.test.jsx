const request = require('supertest');
const app = require('../app');

test('should return images data', async () => {
  await request(app).get('/images/propertyImages/01')
    .send()
    .expect(200);
});
