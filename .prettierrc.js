module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'always',
  semi: false,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/hooks/(.*)$',
    '^@/shared/(.*)$',
    '^@/services/(.*)$',
    '^@/assets/(.*)$',
    '^@/utils/(.*)$',
    '^@/config/(.*)$',
    '^@/providers/(.*)$',
    '^../(.*)',
    '^./(.*)'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
