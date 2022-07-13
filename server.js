const express = require("express");
const app = express();

const pokemonController = require("./controllers/pokemon_controller");

app.set("view engine", "ejs");

const port = 3000;

//Pokemon Routes:
app.get("/pokemon", pokemonController.listPokemon);
app.get("/pokemon/:pokemon_id", pokemonController.showPokemon);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
