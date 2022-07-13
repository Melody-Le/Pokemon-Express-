const pokemon = require("../models/pokemon");

const controller = {
  listPokemon: (req, res) => {
    res.render("index.ejs", {
      myPageTitle: "See all pokemon",
      pokemon,
    });
  },

  showPokemon: (req, res) => {
    // get the pokemon id from route param
    const pokemonId = req.params.pokemon_id;
    // validate the pokemon id
    console.log("1. pokemonId is:", pokemonId);
    const idNumber = parseInt(pokemonId);
    let errMsg = "";
    if (isNaN(idNumber)) errMsg = "Must be a number";
    if (idNumber < 0 || idNumber > pokemon.length)
      errMsg = "must be within range";
    // get the pokemon with the id from the "database"
    console.log("idNumber is: ", idNumber);
    const pokemonData = pokemon[idNumber];
    // render the "show" ejs template
    console.log(pokemonData.name);
    res.render("show.ejs", {
      errMsg: errMsg,
      pokemonName:
        pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
      pokemonImg: pokemonData.img,
      back: "/pokemon",
    });
  },
};

module.exports = controller;
