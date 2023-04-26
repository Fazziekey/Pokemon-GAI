import os
import random
import time
from enum import Enum

import gradio as gr

SEVER_PORT = int(os.environ.get("BATTLE_PORT", 7681))


class ElementType(Enum):
    NORMAL = 1
    FIRE = 2
    WATER = 3
    ELECTRIC = 4
    GRASS = 5
    ICE = 6
    FIGHTING = 7
    POISON = 8
    GROUND = 9
    FLYING = 10
    PSYCHIC = 11
    BUG = 12
    ROCK = 13
    GHOST = 14
    DRAGON = 15
    DARK = 16
    STEEL = 17
    FAIRY = 18


type_chart = {
    ElementType.NORMAL: {
        ElementType.ROCK: 0.5,
        ElementType.GHOST: 0,
        ElementType.STEEL: 0.5
    },
    ElementType.FIRE: {
        ElementType.FIRE: 0.5,
        ElementType.WATER: 0.5,
        ElementType.GRASS: 2.0,
        ElementType.ICE: 2.0,
        ElementType.BUG: 2.0,
        ElementType.ROCK: 0.5,
        ElementType.DRAGON: 0.5,
        ElementType.STEEL: 2.0
    },
    ElementType.WATER: {
        ElementType.FIRE: 2.0,
        ElementType.WATER: 0.5,
        ElementType.GRASS: 0.5,
        ElementType.GROUND: 2.0,
        ElementType.ROCK: 2.0,
        ElementType.DRAGON: 0.5
    },
    ElementType.ELECTRIC: {
        ElementType.WATER: 2.0,
        ElementType.ELECTRIC: 0.5,
        ElementType.GRASS: 0.5,
        ElementType.GROUND: 0,
        ElementType.FLYING: 2.0,
        ElementType.DRAGON: 0.5
    },
    ElementType.GRASS: {
        ElementType.FIRE: 0.5,
        ElementType.WATER: 2.0,
        ElementType.GRASS: 0.5,
        ElementType.POISON: 0.5,
        ElementType.GROUND: 2.0,
        ElementType.FLYING: 0.5,
        ElementType.BUG: 0.5,
        ElementType.ROCK: 2.0,
        ElementType.DRAGON: 0.5,
        ElementType.STEEL: 0.5
    },
    ElementType.ICE: {
        ElementType.FIRE: 0.5,
        ElementType.WATER: 0.5,
        ElementType.GRASS: 2.0,
        ElementType.ICE: 0.5,
        ElementType.GROUND: 2.0,
        ElementType.FLYING: 2.0,
        ElementType.DRAGON: 2.0,
        ElementType.STEEL: 0.5
    },
    ElementType.FIGHTING: {
        ElementType.NORMAL: 2.0,
        ElementType.ICE: 2.0,
        ElementType.POISON: 0.5,
        ElementType.FLYING: 0.5,
        ElementType.PSYCHIC: 0.5,
        ElementType.BUG: 0.5,
        ElementType.ROCK: 2.0,
        ElementType.GHOST: 0,
        ElementType.DARK: 2.0,
        ElementType.STEEL: 2.0,
        ElementType.FAIRY: 0.5
    },
    ElementType.POISON: {
        ElementType.GRASS: 2.0,
        ElementType.POISON: 0.5,
        ElementType.GROUND: 0.5,
        ElementType.ROCK: 0.5,
        ElementType.GHOST: 0.5,
        ElementType.STEEL: 0,
        ElementType.FAIRY: 2.0
    },
    ElementType.GROUND: {
        ElementType.FIRE: 2.0,
        ElementType.ELECTRIC: 2.0,
        ElementType.GRASS: 0.5,
        ElementType.POISON: 2.0,
        ElementType.FLYING: 0,
        ElementType.BUG: 0.5,
        ElementType.ROCK: 2.0,
        ElementType.STEEL: 2.0
    },
    ElementType.FLYING: {
        ElementType.ELECTRIC: 0.5,
        ElementType.GRASS: 2.0,
        ElementType.FIGHTING: 2.0,
        ElementType.BUG: 2.0,
        ElementType.ROCK: 0.5,
        ElementType.STEEL: 0.5
    },
    ElementType.PSYCHIC: {
        ElementType.FIGHTING: 2.0,
        ElementType.POISON: 2.0,
        ElementType.PSYCHIC: 0.5,
        ElementType.DARK: 0,
        ElementType.STEEL: 0.5
    },
    ElementType.BUG: {
        ElementType.FIRE: 0.5,
        ElementType.GRASS: 2.0,
        ElementType.FIGHTING: 0.5,
        ElementType.POISON: 0.5,
        ElementType.FLYING: 0.5,
        ElementType.PSYCHIC: 2.0,
        ElementType.GHOST: 0.5,
        ElementType.DARK: 2.0,
        ElementType.STEEL: 0.5
    },
    ElementType.ROCK: {
        ElementType.FIRE: 2.0,
        ElementType.ICE: 2.0,
        ElementType.FIGHTING: 0.5,
        ElementType.GROUND: 0.5,
        ElementType.FLYING: 2.0,
        ElementType.BUG: 2.0,
        ElementType.STEEL: 0.5
    },
    ElementType.GHOST: {
        ElementType.NORMAL: 0,
        ElementType.PSYCHIC: 2.0,
        ElementType.GHOST: 2.0,
        ElementType.DARK: 0.5
    },
    ElementType.DRAGON: {
        ElementType.DRAGON: 2.0,
        ElementType.STEEL: 0.5,
        ElementType.FAIRY: 0
    },
    ElementType.DARK: {
        ElementType.FIGHTING: 0.5,
        ElementType.PSYCHIC: 2.0,
        ElementType.GHOST: 2.0,
        ElementType.DARK: 0.5,
        ElementType.FAIRY: 0.5
    },
    ElementType.STEEL: {
        ElementType.FIRE: 0.5,
        ElementType.WATER: 0.5,
        ElementType.ELECTRIC: 0.5,
        ElementType.ICE: 2.0,
        ElementType.ROCK: 2.0,
        ElementType.STEEL: 0.5,
        ElementType.FAIRY: 2.0
    },
    ElementType.FAIRY: {
        ElementType.FIGHTING: 2.0,
        ElementType.POISON: 0.5,
        ElementType.STEEL: 0.5,
        ElementType.DARK: 2.0
    }
}


class Pokemon:

    def __init__(self, name: str, element_type: ElementType, hp: int, attack: int):
        self.name = name
        self.element_type = element_type
        self.hp = hp
        self.attack = attack


def calculate_damage_multiplier(attacker: Pokemon, defender: Pokemon) -> float:
    base_multiplier = type_chart.get(attacker.element_type, {}).get(defender.element_type, 1.0)

    if base_multiplier == 1.0:
        base_multiplier = random.uniform(0.8, 1.2)
    elif base_multiplier == 2.0:
        base_multiplier = random.uniform(1.2, 1.5)
    elif base_multiplier == 0.5:
        base_multiplier = random.uniform(0.5, 0.8)

    critical_hit = random.random() < 0.1
    if critical_hit:
        base_multiplier *= 2

    return base_multiplier


def battle(pokemon1: Pokemon = None, pokemon2: Pokemon = None):

    pokemon1 = Pokemon("Charizard", ElementType.FIRE, 100, 30)
    pokemon2 = Pokemon("Blastoise", ElementType.WATER, 100, 25)

    results = []

    # print initial stats
    print(f"{pokemon1.name} ({pokemon1.element_type.name}) has {pokemon1.hp:.2f} hp and {pokemon1.attack:.2f} attack")
    print(f"{pokemon2.name} ({pokemon2.element_type.name}) has {pokemon2.hp:.2f} hp and {pokemon2.attack:.2f} attack")

    results.append(
        f"{pokemon1.name} ({pokemon1.element_type.name}) has {pokemon1.hp:.2f} hp and {pokemon1.attack:.2f} attack")
    results.append(
        f"{pokemon2.name} ({pokemon2.element_type.name}) has {pokemon2.hp:.2f} hp and {pokemon2.attack:.2f} attack")

    while pokemon1.hp > 0 and pokemon2.hp > 0:
        # Pokemon1 attacks Pokemon2
        damage_multiplier = calculate_damage_multiplier(pokemon1, pokemon2)
        damage = pokemon1.attack * damage_multiplier
        pokemon2.hp -= damage

        print(
            f"{pokemon1.name} ({pokemon1.element_type.name}) attacks {pokemon2.name} ({pokemon2.element_type.name}) and deals {damage:.2f} damage!, remaining hp: {pokemon2.hp:.2f}"
        )
        results.append(
            f"{pokemon1.name} ({pokemon1.element_type.name}) attacks {pokemon2.name} ({pokemon2.element_type.name}) and deals {damage:.2f} damage!, remaining hp: {pokemon2.hp:.2f}"
        )

        if pokemon2.hp <= 0:
            print(f"{pokemon2.name} has fainted. {pokemon1.name} wins!")
            results.append(f"{pokemon2.name} has fainted. {pokemon1.name} wins!")
            return results

        # Pokemon2 attacks Pokemon1
        damage_multiplier = calculate_damage_multiplier(pokemon2, pokemon1)
        damage = pokemon2.attack * damage_multiplier
        pokemon1.hp -= damage

        print(
            f"{pokemon2.name} ({pokemon2.element_type.name}) attacks {pokemon1.name} ({pokemon1.element_type.name}) and deals {damage:.2f} damage!, remaining hp: {pokemon1.hp:.2f}"
        )
        results.append(
            f"{pokemon2.name} ({pokemon2.element_type.name}) attacks {pokemon1.name} ({pokemon1.element_type.name}) and deals {damage:.2f} damage!, remaining hp: {pokemon1.hp:.2f}"
        )

        if pokemon1.hp <= 0:
            print(f"{pokemon1.name} has fainted. {pokemon2.name} wins!")
            results.append(f"{pokemon1.name} has fainted. {pokemon2.name} wins!")
            return results

    return results


def battle_one_step(pokemon1: Pokemon = None, pokemon2: Pokemon = None):

    results = []

    # Pokemon1 attacks Pokemon2
    damage_multiplier = calculate_damage_multiplier(pokemon1, pokemon2)
    damage = pokemon1.attack * damage_multiplier
    pokemon2.hp -= damage

    results.append(
        f"{pokemon1.name} ({pokemon1.element_type.name}) attacks {pokemon2.name} ({pokemon2.element_type.name}) and deals {damage:.2f} damage!, remaining hp: {pokemon2.hp:.2f}"
    )

    if pokemon2.hp <= 0:
        results.append(f"{pokemon2.name} has fainted. {pokemon1.name} wins!")
        return results

    # Pokemon2 attacks Pokemon1
    damage_multiplier = calculate_damage_multiplier(pokemon2, pokemon1)
    damage = pokemon2.attack * damage_multiplier
    pokemon1.hp -= damage

    results.append(
        f"{pokemon2.name} ({pokemon2.element_type.name}) attacks {pokemon1.name} ({pokemon1.element_type.name}) and deals {damage:.2f} damage!, remaining hp: {pokemon1.hp:.2f}"
    )

    if pokemon1.hp <= 0:
        results[-1] += f"\n {pokemon1.name} has fainted. {pokemon2.name} wins!"
        # results.append(f"{pokemon1.name} has fainted. {pokemon2.name} wins!")
        return results

    return results


with gr.Blocks() as demo:
    chatbot = gr.Chatbot()

    go = gr.Button("Go")

    pokemon1 = Pokemon("Charizard", ElementType.FIRE, 100, 30)
    pokemon2 = Pokemon("Blastoise", ElementType.WATER, 100, 25)

    def bot(history):
        if len(history) > 0 and 'wins' in history[-1][-1]:
            return history
        result = battle_one_step(pokemon1, pokemon2)
        history.append(result)
        return history

    go.click(bot, chatbot, chatbot, queue=False)

if __name__ == "__main__":
    demo.launch(share=True, server_port=SEVER_PORT)
