const jokeTag = document.getElementById('joke');
const jokeButton = document.getElementById('btn');

const URL = 'https://api.chucknorris.io/jokes/random';

showJoke();

jokeButton.addEventListener('click', showJoke)

async function showJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response = await fetch((URL), config)
  const data = await response.json();

  jokeTag.innerHTML = data.value;
}
