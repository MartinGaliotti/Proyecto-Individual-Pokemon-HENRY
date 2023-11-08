const { Pokemon, Type } = require("../db");

const getPokemonsBDD = async () => {
  let respuesta = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  respuesta = respuesta.map((char) => {
    const { dataValues } = char;
    const pokemon = {
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
  });

  return respuesta;
};

module.exports = getPokemonsBDD;
