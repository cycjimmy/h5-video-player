import antfu from '@antfu/eslint-config'
import globals from 'globals'

export default antfu(
  {
    type: 'lib',
    ignores: [
      '.publish/**',
      '.release/**',
      'coverage/**',
      'dist/**',
      'docs/**',
      'temp/**',
    ],
  },
  {
    files: ['__test__/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    // Build scripts report their progress on stdout.
    files: ['tasks/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
)
