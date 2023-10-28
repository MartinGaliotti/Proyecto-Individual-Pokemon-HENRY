const axios = require("axios");
const { pokemonsURL } = require("../utils/consts");

const getPokemonsAPI = async (limit, offset) => {
  // Peticion a la API
  const response = await axios.get(
    `${pokemonsURL}?limit=${limit}&offset=${offset}`
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
  pokemons = Promise.all(peticiones)
    .then((values) => {
      pokemons = values.map((value) => {
        const { data } = value;
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
          speed: data.stats[5].base_stat,
          weight: data.weight,
          height: data.height,
          types,
        };

        return pokemon;
      });
      return pokemons;
    })
    .catch((err) => {
      throw Error(err.message);
    });
  return pokemons;
};

module.exports = getPokemonsAPI;
