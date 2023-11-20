const request = require("supertest");
const server = require("../../src/app");
const getPokemonsRouter = require("../../src/routes/getPokemonsRouter");

describe("getPokemonsRouter", () => {
  it("getPokemonsRouter is a function", () => {
    expect(typeof getPokemonsRouter).toBe("function");
  });

  it("getPokemonRouter return array when it find a pokemon by name", () => {
    return request(server)
      .get(`/pokemons?name=bulbasaur`)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(typeof data.body).toBe("object");
        expect(data.body.length).toBeGreaterThan(0);
      });
  });

  it("getPokemonRouter return array when it find a pokemons", () => {
    return request(server)
      .get(`/pokemons?limit=2`)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(typeof data.body).toBe("object");
        expect(data.body.length).toBeGreaterThan(0);
      });
  });

  it("getPokemonsRouter returns error when not found", async () => {
    return request(server)
      .get(`/pokemons?name=name`)
      .then((data) => {
        expect(data.status).toBe(500);
      });
  });
});
