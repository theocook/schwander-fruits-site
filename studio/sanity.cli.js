import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'schwander-fruits',
  deployment: { appId: 'weu9evf4fs9jab9j6xpfsym3' },
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'gf4it2ok',
    dataset: 'production',
  },
})
