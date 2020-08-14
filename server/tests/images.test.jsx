const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

it('should return images data', async () => {
  await request.get('/images/propertyImages/01')
    .send()
    .expect(200);
});
