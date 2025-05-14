/** @type {import('prettier').Config} */
const config = {
  arrowParens: "avoid",
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  bracketSpacing: true,
  importOrder: ["^react$", "<THIRD_PARTY_MODULES>", "^@/(.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

module.exports = config;
