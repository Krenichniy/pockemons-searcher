import './css/styles.css';

import pokemonCard from './pokemon.hbs';
import API from './api-services';
const DEBOUNCE_DELAY = 300;
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchPokemon = form.elements.pokemon.value;

  API.fetchPokemon(searchPokemon)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCard(pokemon);

  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert('Enter valid number');
}
