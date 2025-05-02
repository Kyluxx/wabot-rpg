module.exports = [
  {
    name:       "Trial by Fire",
    description:"Tutorial dungeon awal",
    tier:        1,
    minLevel:    1,
    maxPlayers:  2,
    monsterIds: ["slime","wolf","boar"],
    rewards: [
      { type: "experience", quantity: 50, chance: 1, guaranteedReward: true },
      { type: "gmoney",     quantity: 20, chance: 0.8, guaranteedReward: false },
      { type: "item",   itemId: "health_potion",   quantity: 1,  chance: 0.2, guaranteedReward: false }
    ],
    cooldown:   30,
    timeLimit:  10,
    isActive:   true
  },
  // tambahin dungeon lain sesuai kebutuhan...
];
