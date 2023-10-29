const { Pokemon, Type } = require("../db");

const postPokemon = async (pokemon, types) => {
  const respuesta = await Pokemon.create(pokemon); // Inserta el pokemon en la BDD
  types.forEach(async (type) => {
    const typeToRelate = await Type.findOne({ where: { name: type } }); // Busca el id de cada tipo de pokemon
    const { dataValues } = typeToRelate;
    const { id } = dataValues;
    await respuesta.addTypes(id); // Relaciona al pokemon con todos sus tipos
  });
  return "Pokemon creado con exito";
};

module.exports = postPokemon;
