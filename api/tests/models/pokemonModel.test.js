const { conn } = require("../../src/db");
const { Pokemon } = require("../../src/db");

beforeAll(async () => {
  await conn.sync({ force: true });
});

const completePokemon = {
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

let auxPokemon = { ...completePokemon };

describe("Pokemon model", () => {
  it("Should have the correct properties", async () => {
    const pokemon = await Pokemon.create(completePokemon);

    expect(pokemon.id).toBeDefined();
    expect(pokemon.name).toBe("pokemon");
    expect(pokemon.image).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    );
    expect(pokemon.hp).toBe(40);
    expect(pokemon.attack).toBe(35);
    expect(pokemon.defense).toBe(30);
    expect(pokemon.speed).toBe(50);
    expect(pokemon.weight).toBe(32);
    expect(pokemon.height).toBe(3);
  });

  it("Should require name, image, life, attack, defense", async () => {
    await expect(Pokemon.create({})).rejects.toThrow();
  });

  it("Should require name", async () => {
    auxPokemon = { ...completePokemon };
    delete auxPokemon.name;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("The name must be a string of maximum 20 characters", async () => {
    auxPokemon = { ...completePokemon };
    auxPokemon.name = "this name should not be valid";
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.name = { name: "this name should not be valid" };
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("Should require image", async () => {
    auxPokemon = { ...completePokemon };
    delete auxPokemon.image;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("the image should be a URL", async () => {
    auxPokemon = { ...completePokemon };
    auxPokemon.image = "this value should not be valid";
    auxPokemon = { ...completePokemon };
    auxPokemon.image = { aux: "this value should not be valid" };
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.image = [123, 22, "no valid"];
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("Should require hp", async () => {
    auxPokemon = { ...completePokemon };
    delete auxPokemon.hp;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("hp should be an integer between 1 and 255", async () => {
    auxPokemon = { ...completePokemon };
    auxPokemon.hp = "this value should not be valid";
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.hp = 0;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.hp = 1000;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("Should require attack", async () => {
    auxPokemon = { ...completePokemon };
    delete auxPokemon.attack;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("attack should be an integer between 1 and 255", async () => {
    auxPokemon = { ...completePokemon };
    auxPokemon.attack = "this value should not be valid";
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.attack = 0;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.attack = 1000;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("Should require defense", async () => {
    auxPokemon = { ...completePokemon };
    delete auxPokemon.defense;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("defense should be an integer between 1 and 255", async () => {
    auxPokemon = { ...completePokemon };
    auxPokemon.defense = "this value should not be valid";
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.defense = 0;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.defense = 1000;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("speed should be an integer between 0 and 150", async () => {
    auxPokemon = { ...completePokemon };
    auxPokemon.speed = "this value should not be valid";
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.speed = 1000;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("height should be an integer between 0 and 50", async () => {
    auxPokemon = { ...completePokemon };
    auxPokemon.height = "this value should not be valid";
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.height = 52;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });

  it("wheight should be an integer between 0 and 1000", async () => {
    auxPokemon = { ...completePokemon };
    auxPokemon.weight = "this value should not be valid";
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
    auxPokemon.weight = 1001;
    await expect(Pokemon.create(auxPokemon)).rejects.toThrow();
  });
});
