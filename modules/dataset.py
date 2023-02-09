import os
from random import choices, randint
from typing import cast, Dict, List, Optional, TypedDict
import h5py


datasets_dir: str = './datasets'
datasets_file: str = 'pregenerated_pokemon.h5'
h5_file: str = os.path.join(datasets_dir, datasets_file)


class Stats(TypedDict):
    size_total: int
    size_mb: float
    size_counts: Dict[str, int]


def get_stats(h5_file: str = h5_file) -> Stats:
    with h5py.File(h5_file, 'r') as datasets:
        return {
            "size_total": sum(list(datasets[energy].size.item() for energy in datasets.keys())),
            "size_mb": round(os.path.getsize(h5_file) / 1024**2, 1),
            "size_counts": {key: datasets[key].size.item() for key in datasets.keys()},
        }


energy_types: List[str] = ['colorless', 'darkness', 'dragon', 'fairy', 'fighting',
                           'fire', 'grass', 'lightning', 'metal', 'psychic', 'water']


def get_image(energy: Optional[str] = None, row: Optional[int] = None) -> str:
    if not energy:
        energy = choices(energy_types)[0]

    with h5py.File(h5_file, 'r') as datasets:
        if not row:
            row = randint(0, datasets[energy].size - 1)

        return datasets[energy].asstr()[row][0]
