import random
import json
from typing import cast, Dict, List, Optional, TypedDict, Union


class Attack(TypedDict):
    name: str
    cost: List[str]
    convertedEnergyCost: int
    damage: str
    text: str


ListCollection = Dict[str, Union[List[str], List[Attack]]]


def load_lists(list_names: List[str], base_dir: str = "lists") -> ListCollection:
    lists = {}

    for name in list_names:
        with open(f"{base_dir}/{name}.json", "r") as f:
            lists[name] = json.load(f)

    return lists


def rand_hp() -> int:
    # Weights from https://bulbapedia.bulbagarden.net/wiki/HP_(TCG)

    hp_range: List[int] = list(range(30, 340 + 1, 10))

    weights: List[int] = [156, 542, 1264, 1727, 1477, 1232, 1008, 640, 436, 515, 469, 279, 188,
                          131, 132, 132, 56, 66, 97, 74, 23, 24, 25, 7, 15, 6, 0, 12, 18, 35, 18, 3]

    return random.choices(hp_range, weights)[0]


def rand_energy(can_be_none: bool = False) -> Union[str, None]:
    types: List[str] = ['colorless', 'darkness', 'dragon', 'fairy', 'fighting',
                        'fire', 'grass', 'lightning', 'metal', 'psychic', 'water']

    if can_be_none:
        return random.choices([random.choices(types)[0], None])[0]
    else:
        return random.choices(types)[0]


def rand_name(energy_type: str = cast(str, rand_energy())) -> str:
    lists: ListCollection = load_lists([energy_type], 'lists/names')

    return cast(str, random.choices(lists[energy_type])[0])


def rand_species(species: List[str]) -> str:
    random_species: str = random.choices(species)[0]

    return random_species[:1].upper() + random_species[1:]


def rand_length() -> Dict[str, int]:
    # Weights from https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_height

    feet_ranges: List[int] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16,
                              17, 18, 19, 20, 21, 22, 23, 24, 26, 28, 30, 32, 34, 35, 47, 65, 328]

    weights: List[int] = [30, 220, 230, 176, 130, 109, 63, 27, 17, 17, 5, 5, 6,
                          4, 3, 2, 2, 2, 1, 2, 3, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1]

    return {
        "feet": random.choices(feet_ranges, weights)[0],
        "inches": random.randrange(0, 11 + 1, 1)
    }


def rand_weight() -> str:
    # Weights from https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_weight

    weight_ranges: List[Dict[str, int]] = [
        {"start": 1, "end": 22},
        {"start": 22, "end": 44},
        {"start": 44, "end": 55},
        {"start": 55, "end": 110},
        {"start": 110, "end": 132},
        {"start": 132, "end": 218},
        {"start": 218, "end": 220},
        {"start": 221, "end": 226},
        {"start": 226, "end": 331},
        {"start": 331, "end": 441},
        {"start": 441, "end": 451},
        {"start": 452, "end": 661},
        {"start": 661, "end": 677},
        {"start": 677, "end": 793},
        {"start": 794, "end": 903},
        {"start": 903, "end": 2204}]

    # 'weights' as in statistical weightings, not physical mass
    weights: List[int] = [271, 145, 53, 204, 57, 122, 1, 11, 57, 28, 7, 34, 4, 17, 5, 31]

    start: int
    end: int
    start, end = random.choices(weight_ranges, weights)[0].values()

    random_weight: int = random.randrange(start, end + 1, 1)

    return f'{random_weight} lbs.'


def rand_attack(
        attacks: List[Attack],
        name: str, energy_type: Optional[str],
        colorless_only_allowed: bool = False) -> Attack:
    random_attack: Attack = random.choices(attacks)[0]

    energy_type = energy_type.capitalize() if energy_type else None  # Energy is capitalised in the JSON lists

    if energy_type and energy_type != 'Dragon':  # No attacks use Dragon energy so this would otherwise infinitely loop
        if colorless_only_allowed:
            while energy_type not in random_attack["cost"] and 'colorless' not in random_attack["cost"]:
                random_attack = random.choices(attacks)[0]
        else:
            while energy_type not in random_attack["cost"]:
                random_attack = random.choices(attacks)[0]

    random_attack['text'] = random_attack['text'].replace('<name>', name)

    return random_attack


def rand_attacks(attacks: List[Attack], name: str, energy_type: Optional[str], n: int = 2) -> List[Attack]:
    attack1: Attack = rand_attack(attacks, name, energy_type)

    if n > 1:
        attack2: Attack = rand_attack(attacks, name, energy_type, True)
        while attack1['text'] == attack2['text']:
            attack2 = rand_attack(attacks, name, energy_type, True)
        return [attack1, attack2]
    else:
        return [attack1]


def rand_retreat() -> int:
    return random.randrange(0, 4, 1)


def rand_description(descriptions) -> str:
    return random.choices(descriptions)[0]


def rand_rarity() -> str:
    return random.choices(['●', '◆', '★'], [10, 5, 1])[0]


lists: ListCollection = load_lists(['attacks', 'descriptions', 'species'])


class Details(TypedDict):
    name: str
    hp: int
    energy_type: str
    species: str
    length: Dict[str, int]
    weight: str
    attacks: List[Attack]
    weakness: Union[str, None]
    resistance: Union[str, None]
    retreat: int
    description: str
    rarity: str


def rand_details() -> Details:
    energy_type: str = cast(str, rand_energy())
    name: str = rand_name(energy_type)

    return {
        "name": name,
        "hp": rand_hp(),
        "energy_type": energy_type,
        "species": rand_species(cast(List[str], lists["species"])),
        "length": rand_length(),
        "weight": rand_weight(),
        "attacks": cast(List[Attack], rand_attacks(cast(List[Attack], lists["attacks"]), name, energy_type=energy_type)),
        "weakness": rand_energy(can_be_none=True),
        "resistance": rand_energy(can_be_none=True),
        "retreat": rand_retreat(),
        "description": rand_description(lists["descriptions"]),
        "rarity": rand_rarity(),
    }
