const { pokemonsURL } = require("../utils/consts");
const { Pokemon } = require("../db");
const axios = require("axios");

const getPokemonsByName = async (name) => {
  name = name.toLowerCase();
  let pokemons = [];
  let respuesta = await Pokemon.findAll({
    where: {
      name, // Busca el pokemon por nombre en la BDD
    },
  });
  pokemons = [...pokemons, ...respuesta];
  try {
    respuesta = await axios(`${pokemonsURL}/${name}`); // Busca al pokemon por nombre en la API
    const { data } = respuesta;
    let { types } = data;
    types = types.map((element) => {
      return element.type.name;
    });
    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat, // Extrae los datos del pokemom
      weight: data.weight,
      height: data.height,
      types,
    };
    pokemons = [...pokemons, pokemon];
  } catch (error) {
    throw new Error(error.message);
  }

  return pokemons;
};

module.exports = getPokemonsByName;
