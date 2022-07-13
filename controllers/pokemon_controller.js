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
    const pokemonID = req.params.pokemon_id;
    // validate the pokemon id
    console.log("1. pokemonId is:", pokemonID);
    const idNum = parseInt(pokemonID);

    let errMsg = "";
    if (isNaN(idNum)) {
      errMsg = "must be number";
    }
    if (idNum < 0 || idNum > pokemon.length) {
      errMsg = "must be within range";
    }
    // get the pokemon with the id from the "database"
    // console.log("idNumber is: ", idNumber);
    const pokemonData = pokemon[idNum];
    // render the "show" ejs template
    console.log(errMsg);
    res.render("show.ejs", {
      errMsg: errMsg,
      pokemonData,
      back: "/pokemon",
    });
  },
};

module.exports = controller;
