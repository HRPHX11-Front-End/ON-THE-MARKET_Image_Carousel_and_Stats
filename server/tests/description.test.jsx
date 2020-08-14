const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

// it('should return description data', async () => {
//   const response = await request.get('/description');
//   expect(response.status).toBe(200);
//   expect(response.body.message).toBe('pass!');
//   done();
// });
