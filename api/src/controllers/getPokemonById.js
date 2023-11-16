const { Pokemon, Type } = require("../db");
const axios = require("axios");
const { pokemonsURL } = require("../utils/consts");

const getPokemonById = async (id) => {
  if (!id) throw new Error("No se recibio el id"); // Si no recibe ID lanza un error
  if (id.length > 5) {
    // Busca en la base de datos
    let pokemon = await Pokemon.findByPk(id, {
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (pokemon) {
      let { dataValues } = pokemon;
      pokemon = {
        id: dataValues.id,
        name: dataValues.name,
        image: dataValues.image,
        hp: dataValues.hp,
        attack: dataValues.attack,
        defense: dataValues.defense,
        speed: dataValues.speed,
        weight: dataValues.weight,
        height: dataValues.height, // Extrae la informacion
      };

      let types = dataValues.Types;
      types = types.map((type) => {
        return type.dataValues.name;
      });
      pokemon.types = types;
      return pokemon;
    } else {
      throw new Error({ error: "No existe personaje con el id recibido" });
    }
  } else {
    let response = await axios.get(`${pokemonsURL}/${id}`); // Peticion a la API
    let { data } = response;

    // Extrae los  tipos
    let { types } = data;
    types = types.map((element) => {
      return element.type.name;
    });

    // Crea el Pokemon
    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.other.dream_world.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      weight: data.weight,
      height: data.height,
      types,
    };
    return pokemon;
  }
};

module.exports = getPokemonById;
