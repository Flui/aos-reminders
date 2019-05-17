import { IBattalions, IUnits } from 'types/army'
import { SETUP_END, HERO_PHASE, MOVEMENT_PHASE, TURN_ONE } from 'types/meta'

// Command Trait Keywords
export const Tags = {
  SLANN: 'Slann',
  SKINK: 'Skink',
  SAURUS: 'Saurus',
}

// Unit Names
export const Units: IUnits = {
  LORD_KROAK: {
    name: 'Lord Kroak',
    effects: [
      {
        desc: 'Roll for Constellation Configuration',
        when: [SETUP_END],
      },
    ],
  },
  SLANN: {
    name: 'Slann Starmaster',
    effects: [
      {
        desc: 'Roll for Constellation Configuration',
        when: [SETUP_END],
      },
    ],
  },
  OLDBLOOD_ON_CARNOSAUR: {
    name: 'Saurus Oldblood on Carnosaur',
    effects: [],
  },
  OLDBLOOD: {
    name: 'Saurus Oldblood',
    effects: [],
  },
  SCARVET_ON_COLD_ONE: {
    name: 'Saurus Scar-Veteran on Cold One',
    effects: [],
  },
  ETERNITY_WARDEN: {
    name: 'Saurus Eternity Warden',
    effects: [],
  },
  SUNBLOOD: {
    name: 'Saurus Sunblood',
    effects: [],
  },
  SCARVET: {
    name: 'Scar-Veteran with Battle Standard',
    effects: [],
  },
  ASTROLITH_BEARER: {
    name: 'Saurus Astrolith Bearer',
    effects: [],
  },
  SKINK_PRIEST: {
    name: 'Skink Priest',
    effects: [],
  },
  SKINK_STARSEER: {
    name: 'Skink Starseer',
    effects: [],
  },
  SKINK_STARPRIEST: {
    name: 'Skink Starpriest',
    effects: [],
  },
  ENGINE_OF_THE_GODS: {
    name: 'Engine of the Gods',
    effects: [],
  },
  SAURUS_WARRIORS: {
    name: 'Saurus Warriors',
    effects: [],
  },
  SAURUS_GUARD: {
    name: 'Saurus Guard',
    effects: [],
  },
  SAURUS_KNIGHTS: {
    name: 'Saurus Knights',
    effects: [],
  },
  SKINKS: {
    name: 'Skinks',
    effects: [],
  },
  CHAMELEON_SKINKS: {
    name: 'Chameleon Skinks',
    effects: [],
  },
  TERRADONS: {
    name: 'Terradon Riders',
    effects: [],
  },
  RIPPERDACTYLS: {
    name: 'Ripperdactyl Riders',
    effects: [
      {
        desc: 'Place Blot Toad for Ripperdactyls',
        when: [TURN_ONE, HERO_PHASE],
      },
    ],
  },
  SKINK_HANDLERS: {
    name: 'Skink Handlers',
    effects: [],
  },
  SALAMANDERS: {
    name: 'Salamanders',
    effects: [],
  },
  RAZORDONS: {
    name: 'Razordons',
    effects: [],
  },
  KROXIGOR: {
    name: 'Kroxigor',
    effects: [],
  },
  STEGADON: {
    name: 'Stegadon',
    effects: [],
  },
  BASTILADON: {
    name: 'Bastiladon',
    effects: [],
  },
  TROGLODON: {
    name: 'Troglodon',
    effects: [],
  },
  DREAD_SAURIAN: {
    name: 'Dread Saurian',
    effects: [],
  },
}

// Battalions
export const Battalions: IBattalions = {
  //   BLOODCLAW_STARHOST: 'Bloodclaw Starhost',
  //   ETERNAL_STARHOST: 'Eternal Starhost',
  //   FIRELANCE_STARHOST: 'Firelance Starhost',
  //   HEAVENSWATCH_STARHOST: 'Heavenswatch Starhost',
  SHADOWSTRIKE_STARHOST: {
    name: 'Shadowstrike Starhost',
    effects: [
      {
        name: 'Stealthy Advance',
        desc:
          'After set-up is complete, you can roll two dice for each unit in a Shadowstrike Starhost and move all of its models up to that many inches.',
        when: [SETUP_END],
      },
      {
        name: 'The Trap is Sprung',
        desc:
          'In your hero phase, pick a unit that is visible to the starhost’s Skink Priest or Starpriest. Until your next hero phase, you can re-roll hit and wound rolls of 1 for units from the Shadowstrike Starhost that attack the unit you picked.',
        when: [HERO_PHASE],
      },
      {
        name: 'Strike From the Skies',
        desc:
          'Instead of setting up the flying unit from this battalion on the battlefield, you can place it to one side and say that it is hidden amid the clouds. In any of your movement phases, the unit can plummet from the skies to assail the foe. When it does so, you can set it up anywhere more than 3" from the enemy. In the following combat phase, add 1 to the result of any wound rolls made for models from that unit.',
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  //   STARBEAST_CONSTELLATION: 'Starbeast Constellation',
  //   SUNCLAW_STARHOST: 'Sunclaw Starhost',
  //   THUNDERQUAKE_STARHOST: 'Thunderquake Starhost',
  //   FANGS_OF_SOTEK: 'Fangs of Sotek',
  //   DRACOTHIANS_TAIL: "Dracothion's Tail",
}
