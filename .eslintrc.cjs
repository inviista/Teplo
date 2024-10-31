module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'import', 'react', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'warn',
    'no-console': 'off', // Отключить правило, запрещающее использование console
    'no-unused-vars': 'warn', // Изменить на предупреждение вместо ошибки
    'react/jsx-no-target-blank': 'off', // Отключить правило для использования target="_blank"
    'react/react-in-jsx-scope': 'off',
  },
};