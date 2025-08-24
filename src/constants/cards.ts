import type { CardDatabase } from '../types/card';

const cards: CardDatabase = {
  "nyaoha": {
    "name": "ニャオハ",
    "element": "grass",
    "hp": 60,
    "moves": [
      {
        "name": "ふみまくる",
        "cost": 1,
        "damage": 10
      }
    ]
  },
  "hogeta": {
    "name": "ホゲータ",
    "element": "fire",
    "hp": 80,
    "moves": [
      {
        "name": "ねつでこがす",
        "cost": 2,
        "damage": 20
      }
    ]
  },
  "kuwassu": {
    "name": "クワッス",
    "element": "water",
    "hp": 60,
    "moves": [
      {
        "name": "つばめがえし",
        "cost": 1,
        "damage": 10
      }
    ]
  }
};

export const elementIcons = {
	grass: "🌿",
	fire: "🔥",
	water: "💧",
};

export default cards;
