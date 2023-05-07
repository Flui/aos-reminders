import { tagAs } from 'factions/metatagger'
import { ExpertBattalionEffect, SlayersBattalionEffect } from 'generic_rules/core_battalions'
import { OneDropDeploymentEffect } from 'generic_rules/core_rules'

const Battalions = {
  'Epicurean Revellers': {
    effects: [OneDropDeploymentEffect, SlayersBattalionEffect],
  },
  'Nobles of Excess': {
    effects: [ExpertBattalionEffect],
  },
}

export default tagAs(Battalions, 'battalion')
