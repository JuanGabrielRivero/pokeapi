// const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
const URL = 'https://pokeapi.co/api/v2/pokemon/';
const container = document.querySelector(".container");
const MAX_POKEMONS = 151;
// let random = Math.floor(Math.random() * 150) + 1;
// let randomUrl = URL + random;
const promises = [];
for(let i = 1; i<MAX_POKEMONS+1; i++ ){
  const url = URL + i
  fetch(url)
    .then(response => response.json())
    .then((data) => createPokemon(data));
}

const createPokemon = (data) => {
  const pokeName = data.name;
  const pokeImg = data.sprites.other.dream_world.front_default;
  const pokeHeight = data.height*2.54; //de inches a cm
  const pokeWeight = data.weight/100; // gr to kg
  const pokeId = data.id;

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divId = document.createElement("p");
  divId.classList.add("id");
  divId.textContent ="Pokédex #" + pokeId;

  const divName = document.createElement("h1");
  divName.classList.add("name");
  divName.textContent = "Name: " + pokeName;

  const divImg = document.createElement("img");
  divImg.classList.add("img");
  divImg.src = pokeImg;

  const divHeight = document.createElement("p");
  divHeight.classList.add("height");
  divHeight.textContent = "Height: " + pokeHeight + " cm";

  const divWeight = document.createElement("p");
  divWeight.classList.add("weight");
  divWeight.textContent = "Weight: " + pokeWeight + " kg";


  divCard.appendChild(divImg);
  divCard.appendChild(divName);
  divCard.appendChild(divId);
  divCard.appendChild(divHeight);
  divCard.appendChild(divWeight);
  container.appendChild(divCard);
};



