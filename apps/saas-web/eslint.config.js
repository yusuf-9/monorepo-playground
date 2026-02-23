import { defineConfig, globalIgnores } from 'eslint/config'
import baseConfig from '../../packages/config/src/eslint.config.js'

export default defineConfig([
  globalIgnores(['dist']),
  ...baseConfig,
  {
    // App-specific overrides
    rules: {
      // Add app-specific rules here
    },
  },
])
