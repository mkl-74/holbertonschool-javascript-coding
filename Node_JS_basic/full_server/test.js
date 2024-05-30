const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
  it('responds with Hello Holberton School!', (done) => {
    request(app)
      .get('/')
      .expect(200, 'Hello Holberton School!', done);
  });
});

describe('GET /students', () => {
  it('responds with the list of students', (done) => {
    request(app)
      .get('/students')
      .expect(200)
      .expect(/This is the list of our students/, done);
  });
});

describe('GET /students/:major', () => {
  it('responds with the list of students by major', (done) => {
    request(app)
      .get('/students/CS')
      .expect(200)
      .expect(/List:/, done);
  });
});
