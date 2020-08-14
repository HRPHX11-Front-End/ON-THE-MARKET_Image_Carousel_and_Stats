const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

// it('should return stat data', async () => {
//   await request
//     .get('/stats')
//     .set('accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200);
// });
