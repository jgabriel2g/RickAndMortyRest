const API_URL = 'https://rickandmortyapi.com/api/character/';

async function getCharacters() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

function createCard(character) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = character.image;
  image.alt = character.name;
  card.appendChild(image);

  const name = document.createElement('h2');
  name.textContent = character.name;
  card.appendChild(name);

  return card;
}

async function main() {
  const characters = await getCharacters();

  const cardsContainer = document.querySelector('.cards-container');
  characters.forEach(character => {
    const card = createCard(character);
    cardsContainer.appendChild(card);
  });
}

main();
