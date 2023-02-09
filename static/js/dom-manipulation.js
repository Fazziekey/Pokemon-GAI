import { toPng } from 'https://cdn.jsdelivr.net/npm/html-to-image@~1.9/es/index.js/+esm';

const updateCardName = (trainerName, pokeName, useTrainerName) => {
  const cardName = document.querySelector('.pokecard .name');

  if (!cardName) {
    return;
  }

  let trainerString = '';

  if (trainerName && useTrainerName) {
    trainerName = [...trainerName].filter((char) => char.match(/[\wÀ-ÿ '".,@&+#!?:/\\()_-]/g)?.length).join('');
    trainerString = `${trainerName}${trainerName.match(/[sSzZ]$/g)?.length ? "' " : "'s "}`;
  }

  const fullName = `${trainerString}${pokeName}`;
  cardName.innerText = fullName;

  let nameWidth;
  let cardWidth = document.querySelector('.pokecard').getBoundingClientRect().width;

  let scale = 1.01;

  do {
    scale -= 0.01;
    cardName.style.transform = `scaleX(${scale})`;
    nameWidth = cardName.getBoundingClientRect().width;
  } while (nameWidth / cardWidth > 0.62);

  return fullName;
};

const rotateCard = () => {
  const RANGE = 0.1;
  const INTERVAL = 13; // ~75 per second
  let previousTime = 0;

  // Throttle closure
  return (card, containerMouseEvent) => {
    const currentTime = performance.now();

    if (currentTime - previousTime > INTERVAL) {
      previousTime = currentTime;

      const rect = card.getBoundingClientRect();

      const rotateX = (containerMouseEvent.clientY - rect.y - rect.height / 2) * RANGE;
      const rotateY = -(containerMouseEvent.clientX - rect.x - rect.width / 2) * RANGE;

      card.style.setProperty('--card-rx', rotateX + 'deg');
      card.style.setProperty('--card-ry', rotateY + 'deg');
    }
  };
};

const initialiseCardRotation = (scene) => {
  const card = document.querySelector('.pokecard');

  const mousemoveHandler = rotateCard().bind(null, card);

  scene.addEventListener('mousemove', mousemoveHandler, true);

  return mousemoveHandler;
};

const setOutput = (mode, state) => {
  const output = document.querySelector('.output');

  output.dataset.mode = mode;
  output.dataset.state = state;
};

const screenshotCard = async () => {
  const card = document.querySelector('.pokecard');

  /* Load twice for Safari bug */

  let imageUrl = await toPng(card);

  imageUrl = await toPng(card, {
    width: 400,
    height: 558,
    backgroundColor: 'transparent',
    style: {
      transform: 'none',
    },
  });

  return imageUrl;
};

export { updateCardName, initialiseCardRotation, setOutput, screenshotCard };
