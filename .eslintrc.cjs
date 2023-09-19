module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Adicione o ambiente Node.js
  },
  extends: "eslint:recommended",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.js",
        ".eslintrc.cjs", // Inclua outras extensões de arquivo, se necessário
      ],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // Suas regras existentes aqui
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }], // Mantenha sua regra original
  },
};
