// players.js

import debruyneImage from "./images/debruyne.jpg";
import mbappeImage from "./images/mbappe.jpg";
import messiImage from "./images/messi.jpg";
import ronaldoImage from "./images/ronaldo.jpg";

const players = [
  {
    name: "Lionel Messi",
    team: "Paris Saint-Germain",
    nationality: "Argentina",
    jerseyNumber: 30,
    age: 34,
    imageUrl: messiImage,
  },
  {
    name: "Cristiano Ronaldo",
    team: "Manchester United",
    nationality: "Portugal",
    jerseyNumber: 7,
    age: 37,
    imageUrl: ronaldoImage,
  },
  {
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    nationality: "France",
    jerseyNumber: 7,
    age: 23,
    imageUrl: mbappeImage,
  },
  {
    name: "Kevin De Bruyne",
    team: "Manchester City",
    nationality: "Belgium",
    jerseyNumber: 17,
    age: 30,
    imageUrl: debruyneImage,
  },
];

export default players;
