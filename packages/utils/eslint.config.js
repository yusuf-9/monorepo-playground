import { defineConfig } from 'eslint/config'
import baseConfig from '../config/src/eslint.config.js'

export default defineConfig([
  ...baseConfig,
  {
    // Package-specific overrides
    rules: {},
  },
])
