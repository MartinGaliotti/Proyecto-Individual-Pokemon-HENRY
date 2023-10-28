const { Pokemon, Type } = require("../db");

const postPokemon = async (pokemon, types) => {
  const respuesta = await Pokemon.create(pokemon);
  types.forEach(async (type) => {
    const typeToRelate = await Type.findOne({ where: { name: type } });
    const { dataValues } = typeToRelate;
    const { id } = dataValues;
    await respuesta.addTypes(id);
  });
  return "Pokemon creado con exito";
};

module.exports = postPokemon;
