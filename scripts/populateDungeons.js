// scripts/populateDungeons.js
require('dotenv').config({ path: `${__dirname}/../.env` });
const mongoose = require('mongoose');
const { Dungeon } = require('../src/models/Dungeon');
const rawMonsters = require('../src/data/monsters/monsters.json');
const rawDungeons = require('./dummyDungeons.js'); 
// dummyDungeon.js berisi array { name, description, tier, minLevel, maxPlayers, monsterIds, rewards, ... }

async function seedDungeons() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log('Terhubung ke MongoDB'))
  .catch(err => {
    console.error('Gagal terhubung ke MongoDB:', err);
    process.exit(1);
  });
  await Dungeon.deleteMany({}); // opsional: bersihin dulu

  for (const raw of rawDungeons) {
    // ambil objek monster lengkap dari JSON
    const dungeonMonsters = raw.monsterIds.map(id => {
      const m = rawMonsters.find(x => x.id === id);
      if (!m) throw new Error(`Monster ID "${id}" gak ketemu di monsters.json`);
      return {
        name:       m.name,
        level:      Math.max(1, Math.floor(m.exp / 5)), // contoh konversi exp→level
        health:     m.hp,
        attack:     m.attack,
        defense:    m.defense,
        experience: m.exp,
        dropChance: m.lootChance,
        dropTier:   raw.tier,
        bossMonster: m.rarity === 'epic' // misal epic → boss
      };
    });

    await Dungeon.create({
      name:        raw.name,
      description: raw.description,
      tier:        raw.tier,
      minLevel:    raw.minLevel,
      maxPlayers:  raw.maxPlayers,
      monsters:    dungeonMonsters,
      rewards:     raw.rewards,
      cooldown:    raw.cooldown,
      timeLimit:   raw.timeLimit,
      isActive:    raw.isActive
    });
    console.log(`✓ Seeded dungeon: ${raw.name}`);
  }

  console.log('All dungeons seeded! 🎉');
  process.exit(0);
}

seedDungeons().catch(console.error);
