const supertest = require("supertest")
const expect = require("chai").expect;
const app = require('../src/server')
const request = supertest(app);

describe("GET /health", function () {
  it("ensure app is running", async function () {
    const response = await request.get("/health");

    expect(response.status).to.eql(200);
    expect(response.body.status).to.eql('ok');
  });
});