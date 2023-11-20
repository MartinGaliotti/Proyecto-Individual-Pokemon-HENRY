const request = require("supertest");
const server = require("../../src/app");
const getPokemonByIdRouter = require("../../src/routes/getPokemonByIdRouter");

describe("getPokemonByIdRouter", () => {
  it("getPokemonByIdRouter is a function", () => {
    expect(typeof getPokemonByIdRouter).toBe("function");
  });

  it("getTypesRouter return pokemon when existing id", () => {
    return request(server)
      .get(`/pokemons/2`)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(typeof data.body).toBe("object");
        expect(data.body.id).toBe(2);
      });
  });

  it("getTypesRouter return pokemon when existing id", () => {
    return request(server)
      .get(`/pokemons/56`)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(typeof data.body).toBe("object");
        expect(data.body.id).toBe(56);
      });
  });

  it("getTypesRouter return error when the id does not exist", () => {
    return request(server)
      .get(`/pokemons/idnonexistent`)
      .then((data) => {
        expect(data.status).toBe(500);
      });
  });
});
