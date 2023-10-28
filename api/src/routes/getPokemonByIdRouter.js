const getPokemonById = require("../controllers/getPokemonById");

const getPokemonByIdRouter = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await getPokemonById(id);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPokemonByIdRouter;
