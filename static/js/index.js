import { cardHTML } from './card-html.js';
import { updateCardName, initialiseCardRotation, setOutput, screenshotCard } from './dom-manipulation.js';

const nameInput = document.querySelector('input[name="name"');
const nameToggle = document.querySelector('button.toggle-name');

let pokeName;
let trainerName;
let useTrainerName = true;
let generating = false;
let mousemoveHandlerForPreviousCard;
let pulls = 0;
let saved = 0;

const generate = async () => {
  if (generating) {
    return;
  }

  const scene = document.querySelector('.scene');
  const cardSlot = scene.querySelector('.card-slot');
  const actions = document.querySelector('.actions');

  scene.removeEventListener('mousemove', mousemoveHandlerForPreviousCard, true);
  cardSlot.innerHTML = '';
  generating = true;
  document.querySelector('.scene .booster').removeAttribute('title');
  setOutput('booster', 'generating');

  try {
    actions.style.opacity = '1';
    actions.setAttribute('aria-hidden', 'false');
    actions.querySelectorAll('button').forEach((button) => button.setAttribute('tabindex', '0'));

    if (window.innerWidth <= 920) {
      scene.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    await new Promise((resolve) => setTimeout(resolve, 2_000));

    pulls += 1;

    const cardResponse = await fetch(`new_card?pull=${pulls}&saved=${saved}`);
    const card = await cardResponse.json();

    pokeName = card.details.name;

    generating = false;

    setOutput('booster', 'completed');

    await new Promise((resolve) =>
      setTimeout(resolve, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1_500 : 1_000)
    );

    cardSlot.innerHTML = cardHTML(card.details);
    document.querySelector('img.picture').src = card.image;

    mousemoveHandlerForPreviousCard = initialiseCardRotation(scene);

    setOutput('card', 'completed');

    const updateNameDuringAnimation = setInterval(() => updateCardName(trainerName, pokeName, useTrainerName), 100);

    setTimeout(() => {
      clearInterval(updateNameDuringAnimation);
    }, 500);
  } catch (err) {
    generating = false;
    setOutput('booster', 'failed');
    console.error(err);
  }
};

nameInput.addEventListener('input', (e) => {
  trainerName = [...e.target.value].filter((char) => char.match(/[\wÀ-ÿ '".,@&+#!?:/\\()_-]/g)?.length).join('');

  nameInput.value = trainerName;

  updateCardName(trainerName, pokeName, useTrainerName);
});

document.querySelector('form.name-form').addEventListener('submit', (e) => {
  e.preventDefault();

  if (document.querySelector('.output').dataset.state === 'completed') {
    if (!window.confirm('Generate new Pokémon?')) {
      return;
    }
  }

  generate();
});

nameToggle.addEventListener('click', () => {
  useTrainerName = !useTrainerName;

  updateCardName(trainerName, pokeName, useTrainerName);

  if (!useTrainerName) {
    nameToggle.classList.add('off');
  } else {
    nameToggle.classList.remove('off');
  }
});

document.querySelector('.booster').addEventListener('click', generate);

document.querySelector('button.generate-new').addEventListener('click', generate);

document.querySelector('button.save').addEventListener('click', async () => {
  const a = document.createElement('a');
  a.href = await screenshotCard();
  a.download = `${updateCardName(trainerName, pokeName, useTrainerName)} - This Pokémon Does Not Exist.png`;
  a.click();
  saved += 1;
});
