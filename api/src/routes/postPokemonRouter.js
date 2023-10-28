const postPokemon = require("../controllers/postPokemon");

const postPokemonRouter = async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, weight, height, types } =
      req.body;
    if (!name || !image || !hp || !attack || !defense || !types) {
      res.status(404).json({ error: "Faltan datos para crear al Pokemon" });
      return;
    }
    const pokemon = {
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      weight,
      height,
    };
    const respuesta = await postPokemon(pokemon, types);
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postPokemonRouter;
