const axios = require("axios");
const baseURL = require("../utils/consts");

const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error("No se recibio el id"); // Si no recibe ID lanza un error
    let response = await axios.get(`${baseURL}/${id}`); // Peticion a la API
    let { data } = response;

    const pokemon = {
      id: data.id,
      name: data.name,
      image: data.sprites.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      weight: data.weight,
      height: data.height,
    };
    res.status(200).json({ pokemon });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemonById;
