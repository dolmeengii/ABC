module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
    ],
    env: {
        browser: true,
        es2021: true,
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'on',
        '@typescript-eslint/explicit-function-return-type': 'on',
        '@typescript-eslint/explicit-module-boundary-types': 'on',
        '@typescript-eslint/no-explicit-any': 'on',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'type'],
                pathGroups: [
                    {
                        pattern: 'react+(|-native)',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '@**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroupsExcludedImportTypes: ['builtin'],
            },
        ],
    },
};
