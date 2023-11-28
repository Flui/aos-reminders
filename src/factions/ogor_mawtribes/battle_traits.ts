import { tagAs } from 'factions/metatagger'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  DURING_GAME,
  END_OF_COMBAT_PHASE,
  MOVEMENT_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_HERO_PHASE,
  START_OF_ROUND,
} from 'types/phases'
import rule_sources from './rule_sources'
import meta_rule_sources from 'meta/rule_sources'

const BattleTraits = {
  'Trampling Charge': {
    effects: [
      {
        name: `Trampling Charge`,
        desc: `After a friendly OGOR or RHINOX unit makes a charge move, you can pick 1 enemy unit within 1" of that unit and roll a number of dice equal to the unmodified charge roll for that charge move. Add 1 to each roll if the charging unit is an OGOR unit that has 3 or more models. Add 2 to each roll if it is a MONSTER. For each 6+, that enemy unit suffers 1 mortal wound.`,
        when: [CHARGE_PHASE],
      },
    ],
  },

  'Grasp of the Everwinter': {
    effects: [
      {
        name: `Grasp of the Everwinter`,
        desc: `At the start of your hero phase, roll a dice for each enemy unit within 3" of any friendly BEASTCLAW RAIDERS units. If the roll is equal to or less than the number of the current battle round, that unit suffers D3 mortal wounds.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },

  'Might Makes Right': {
    effects: [
      {
        name: `Might Makes Right`,
        desc: `For the purposes of contesting objectives (core rules, 18.1.2), each friendly OGOR MAWTRIBES OGOR counts as 2 models, each friendly OGOR MAWTRIBES HERO that is not a MONSTER counts as 5 models, and each friendly OGOR MAWTRIBES MONSTER counts as 10 models.`,
        when: [DURING_GAME],
      },
    ],
  },

  'Ravenous Brutes': {
    effects: [
      {
        name: `Ravenous Brutes`,
        desc: `If an OGOR unit is more than 3" from any enemy units, it is hungry. If an OGOR unit is within 3" of any enemy units, it is eating. Add 2" to the Move characteristic of a unit that is hungry. Add 2 to the Bravery characteristic of a unit that is eating.`,
        when: [DURING_GAME],
      },
      {
        name: `Ravenous Brutes`,
        desc: `If an OGOR unit is more than 3" from any enemy units, it is hungry. Add 2" to the Move characteristic of a unit that is hungry.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Ravenous Brutes`,
        desc: `If an OGOR unit is within 3" of any enemy units, it is eating. Add 2 to the Bravery characteristic of a unit that is eating.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },

  'Gulping Bites': {
    effects: [
      {
        name: `Gulping Bites`,
        desc: `Roll a dice for each enemy unit within 3" of any friendly GUTBUSTERS OGOR units. On a 4+, that unit suffers D3 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
      },
    ],
  },

  'The Roving Maw': {
    effects: [
      {
        name: `Mawpits of Ghur`,
        desc: `At the start of each battle round, after determining which player will take the first turn, you must determine the hunger status of the Mawpits on the battlefield by rolling 2D6. If you included a Mawpit in your army, add the number of models slain by its Head Butcher ability during the battle to the roll. If the Mawpit is garrisoned by a Head Butcher, add 1 to the roll. Then, pick 1 result from the Mawpit Table that has a score equal to or less than your modified dice roll to apply for that battle round.

        A unit is vulnerable to Mawpits if it is on the battlefield unless it is wholly within 1" of a terrain feature that is not a Mawpit or it can fly. This ability has no effect on ROVING MAW units.
                
        2-3: Subdued: No effect.
        4-5: Peckish: Subtract 1 from the Bravery characteristic of units that are vulnerable to Mawpits.
        6-8: Rumbling: Roll a dice for each unit that is vulnerable to Mawpits. On a 5+, that unit suffers 1 mortal wound.
        9-11: Famished: Units that are vulnerable to Mawpits and that do not have the HERO keyword cannot issue commands.
        12+: Ravenous: Roll a dice for each unit that is vulnerable to Mawpits. On a 4+, that unit suffers D3 mortal wounds. `,
        when: [START_OF_ROUND],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Driven by Starvation`,
        desc: `Friendly GORGERS units that are not wholly within 1" of a terrain feature at the start of your charge phase can attempt a charge even if they ran in the same turn.`,
        when: [START_OF_CHARGE_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `The Butcher's Kitchen`,
        desc: `For each BUTCHER included in your army, you can include 1 GORGERS unit as a Battleline unit.`,
        when: [DURING_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Gobbling Bites`,
        desc: `At the end of the combat phase, roll a dice for each enemy unit within 3" of any friendly GUTBUSTERS units. On a 2+, that enemy unit suffers D3+1 mortal wounds.`,
        when: [END_OF_COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },

  'The Roving Maw Battle Tactics': {
    effects: [
      {
        name: `That Was Just a Morsel`,
        desc: `You complete this tactic if any enemy models were slain by the Mawpit's Head Butcher ability in this turn.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `Slavering Ambush`,
        desc: `You complete this tactic if a friendly GORGERS unit was set up on the battlefield using the Ambushing Hunters ability this turn and made a charge move this turn.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
      {
        name: `We Eated 'Em All`,
        desc: `Pick 1 objective controlled by your opponent. You complete this tactic if you control that objective at the end of this turn and there are no enemy models contesting it.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },

  'Battle Tactics': {
    effects: [
      {
        name: `Eat Your Fill`,
        desc: `You complete this tactic at the start of the combat phase if every friendly OGOR unit is eating.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Savour the Taste`,
        desc: `You cannot pick this battle tactic in the first battle round. You complete this tactic at the end of your turn if every friendly OGOR unit on the battlefield is hungry.`,
        when: [START_OF_HERO_PHASE],
        rule_sources: [rule_sources.BATTLETOME_OGOR_MAWTRIBES, rule_sources.ERRATA_APRIL_2023],
      },
      {
        name: `Avalanche of Flesh`,
        desc: `You complete this tactic at the end of the turn if 10+ mortal wounds were caused by the trampling charge battle trait this turn.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Winter Take Thee`,
        desc: `Pick 1 enemy HERO or enemy MONSTER. You complete this tactic if that enemy unit is destroyed by wounds caused by the Grasp of the Everwinter battle trait (pg 64) this turn.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Let them Loose`,
        desc: `You complete this tactic at the end of your turn if you carried out 4 or more monstrous rampages this turn.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Boil their Bones`,
        desc: `Pick 1 enemy HERO or enemy MONSTER. You complete this tactic if that enemy unit is destroyed within 6 of an empty Great Mawpot in your army.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
}

export default tagAs(BattleTraits, 'battle_trait')
