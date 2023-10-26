const axios = require("axios");
const baseURL = require("../utils/consts");
const { response } = require("../app");

const getPokemons = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    limit ? limit : (limit = 10); // Si no llega un limite, establece 10
    offset ? offset : (offset = 0); // Si no llega un offset, establece 0
    // Peticion a la API
    const response = await axios.get(
      `${baseURL}?limit=${limit}&offset=${offset}`
    );
    const { data } = response;
    const { results } = data;
    const peticiones = [];
    // Recorre los pokemons y genera las promesas
    results.forEach(async (char) => {
      let url = char.url;
      peticiones.push(axios.get(url));
    });

    let pokemons = [];
    // Procesa las promesas y toma los datos importantes de cada Pokemon
    Promise.all(peticiones)
      .then((values) => {
        pokemons = values.map((value) => {
          const { data } = value;
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

          return pokemon;
        });
        res.status(200).json(pokemons);
      })
      .catch((err) => {
        throw Error(err.message);
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemons;
