const request = require("supertest");
const server = require("../../src/app");
const getTypesRouter = require("../../src/routes/getTypesRouter");

describe("getTypesRouter", () => {
  it("getTypesRouter is a function", () => {
    expect(typeof getTypesRouter).toBe("function");
  });

  it("getTypesRouter return array", () => {
    return request(server)
      .get(`/types`)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(typeof data.body).toBe("object");
        expect(data.body.length).toBeGreaterThan(0);
      });
  });
});
