const axios = require("axios");
const { typeURL } = require("../utils/consts");
const { Type } = require("../db");

const getTypes = async () => {
  const respuesta = await axios.get(typeURL); // Peticion a la API
  const { data } = respuesta;
  let { results } = data;
  results = results.map((type) => {
    return type.name; // Extrae los nombres de los Tipos
  });

  const promises = results.map((type) => {
    return Type.findOrCreate({
      where: { name: type },
      defaults: {
        name: type, // Genera las promesas de la basa de datos
      },
    });
  });

  // Resuelve las promesas
  Promise.all(promises).catch((error) => {
    throw new Error(error.message);
  });
  return results;
};

module.exports = getTypes;
