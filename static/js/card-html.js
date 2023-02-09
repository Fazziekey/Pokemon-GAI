const TYPES = {
  colorless: '⭐',
  darkness: '🌑',
  dragon: '🐲',
  fairy: '🧚',
  fighting: '✊',
  fire: '🔥',
  grass: '🍃',
  lightning: '⚡',
  metal: '⚙️',
  psychic: '👁️',
  water: '💧',
};

const energyHTML = (type, types = TYPES) => {
  return `<span title="${type} energy" class="energy ${type.toLowerCase()}">${types[type.toLowerCase()]}</span>`;
};

const attackCostHTML = (cost) => {
  if (!cost.length) {
    return '';
  }

  return `
  <div class="attack-cost">
    ${cost.map((energy) => energyHTML(energy)).join('')}
  </div>`;
};

const attackDescriptionHTML = (text) => {
  if (!text) {
    return '';
  }

  let fontSize;

  if (text.length > 185) {
    fontSize = 0.7;
  } else if (text.length > 120) {
    fontSize = 0.8;
  } else {
    fontSize = 0.9;
  }

  return `<span class="attack-details"${fontSize ? ` style="font-size: ${fontSize.toString()}em"` : ''}>${text}</span>`;
};

const attackDamageHTML = (damage) => {
  if (!damage) {
    return '';
  }

  return `<span class="attack-damage">${damage}</span>`;
};

const attackRowsHTML = (attacks) => {
  return attacks
    .map((attack) => {
      const { cost, damage, name, text } = attack;

      return `
<li class="attacks-row ${cost.length ? '' : 'no-cost'} ${damage ? '' : 'no-damage'}">
  ${attackCostHTML(cost)}
  <span class="attack-text">
    <span class="attack-name">${name}</span>
    ${attackDescriptionHTML(text)}
  </span>
  ${attackDamageHTML(damage)}
</li>`;
    })
    .join('');
};

export const cardHTML = (details) => {
  const { hp, energy_type, species, length, weight, attacks, weakness, resistance, retreat, description, rarity } =
    details;

  const poke_name = details.name; // `name` would be reserved JS word

  return `
<div class="pokecard ${energy_type.toLowerCase()}">
  <p class="evolves">Basic Pokémon</p>
  <header>
    <h1 class="name">${poke_name}</h1>
    <div>
      <span class="hp">${hp} HP</span>
      ${energyHTML(energy_type)}
    </div>
  </header>
  <img class="picture frame" alt="AI generated Pokémon called ${poke_name}" width="324" height="228" />
  <div class="species frame">
    ${species} Pokémon. Length: ${length.feet}'${length.inches}", Weight: ${weight}
  </div>
  <div class="lower-half">
    <ul class="attacks">
      ${attackRowsHTML(attacks)}
    </ul>
    <div class="multipliers">
      <div class="weakness">
        <span>weakness</span>
        ${weakness ? energyHTML(weakness) : ''}
      </div>
      <div class="resistance">
        <span>resistance</span>
        ${resistance ? energyHTML(resistance) : ''}
        <span class="resistance-total"
          >${resistance ? '-30' : ''}</span
        >
      </div>
      <div class="retreat-cost">
        <span>retreat cost</span>
        <div>${energyHTML('Colorless').repeat(retreat)}</div>
      </div>
    </div>
    <p class="description frame">${description}</p>
    <div class="footer">
      <span
        ><a href="https://huggingface.co/minimaxir/ai-generated-pokemon-rudalle" target="_blank">Illus. Max Woolf</a
        ></span
      >
      <span><a href="https://huggingface.co/spaces/launch" target="_blank">${new Date().getFullYear()} Hugging Face</a></span>
      <span title="Rarity">${rarity}</span>
    </div>
  </div>
</div>`;
};
