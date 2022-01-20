const supertest = require('supertest');
const { expect } = require('chai');
const app = require('../src/server');

const request = supertest(app);

describe('GET /health', () => {
  it('ensure app is running', async () => {
    const response = await request.get('/health');

    expect(response.status).to.eql(200);
    expect(response.body.status).to.eql('ok');
  });
});
