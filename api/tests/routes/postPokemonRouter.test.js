const request = require("supertest");
const server = require("../../src/app");
const postPokemonRouter = require("../../src/routes/postPokemonRouter");

describe("postPokemonRouter", () => {
  const pokemon = {
    name: "pokemon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    hp: 40,
    attack: 35,
    defense: 30,
    speed: 50,
    weight: 32,
    height: 3,
    types: ["grass", "flying", "poison"],
  };

  let auxPokemon = {};

  it("postPokemonRouter is a function", () => {
    expect(typeof postPokemonRouter).toBe("function");
  });

  it("If it does not receive data, an error is returned", () => {
    return request(server)
      .post("/pokemons")
      .then((data) => {
        expect(data.status).toBe(404);
      });
  });

  it("If receive the data correctly, create a pokemon", () => {
    return request(server)
      .post("/pokemons")
      .send(pokemon)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(data.body).toBe("Pokemon creado con exito");
      });
  });

  it("If receive incomplete data, an error is returned", () => {
    auxPokemon = { ...pokemon };
    delete auxPokemon.attack;
    return request(server)
      .post("/pokemons")
      .send(auxPokemon)
      .then((data) => {
        expect(data.status).toBe(404);
        expect(data.body.error).toBe("Faltan datos para crear al Pokemon");
      });
  });

  it("If receive incomplete data, an error is returned", () => {
    auxPokemon = { ...pokemon };
    delete auxPokemon.defense;
    return request(server)
      .post("/pokemons")
      .send(auxPokemon)
      .then((data) => {
        expect(data.status).toBe(404);
        expect(data.body.error).toBe("Faltan datos para crear al Pokemon");
      });
  });

  it("If receive incomplete data, an error is returned", () => {
    auxPokemon = { ...pokemon };
    delete auxPokemon.hp;
    return request(server)
      .post("/pokemons")
      .send(auxPokemon)
      .then((data) => {
        expect(data.status).toBe(404);
        expect(data.body.error).toBe("Faltan datos para crear al Pokemon");
      });
  });

  it("If receive incomplete data, an error is returned", () => {
    auxPokemon = { ...pokemon };
    delete auxPokemon.name;
    return request(server)
      .post("/pokemons")
      .send(auxPokemon)
      .then((data) => {
        expect(data.status).toBe(404);
        expect(data.body.error).toBe("Faltan datos para crear al Pokemon");
      });
  });

  it("If receive incomplete data, an error is returned", () => {
    auxPokemon = { ...pokemon };
    delete auxPokemon.image;
    return request(server)
      .post("/pokemons")
      .send(auxPokemon)
      .then((data) => {
        expect(data.status).toBe(404);
        expect(data.body.error).toBe("Faltan datos para crear al Pokemon");
      });
  });

  it("If receive incomplete data, an error is returned", () => {
    auxPokemon = { ...pokemon };
    delete auxPokemon.types;
    return request(server)
      .post("/pokemons")
      .send(auxPokemon)
      .then((data) => {
        expect(data.status).toBe(404);
        expect(data.body.error).toBe("Faltan datos para crear al Pokemon");
      });
  });

  it("If receive the required data, but not the rest, create the pokemon anyway", () => {
    auxPokemon = { ...pokemon };
    delete auxPokemon.height;
    delete auxPokemon.weight;
    delete auxPokemon.speed;
    return request(server)
      .post("/pokemons")
      .send(auxPokemon)
      .then((data) => {
        expect(data.status).toBe(200);
        expect(data.body).toBe("Pokemon creado con exito");
      });
  });
});
