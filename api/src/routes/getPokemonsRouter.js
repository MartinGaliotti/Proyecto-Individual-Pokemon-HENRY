const getPokemonsByName = require("../controllers/getPokemonsByName");
const getPokemonsAPI = require("../controllers/getPokemonsAPI");

const getPokemonsRouter = async (req, res) => {
  try {
    const { name } = req.query;
    let respuesta = [];
    if (name) {
      respuesta = await getPokemonsByName(name); // Si viene nombre por query busca por nombre
    } else {
      let { limit, offset } = req.query;
      limit ? limit : (limit = 10); // Si no llega un limite, establece 10
      offset ? offset : (offset = 0); // Si no llega un offset, establece 0
      respuesta = await getPokemonsAPI(limit, offset); // Trae pokemons de la API
    }
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemonsRouter;