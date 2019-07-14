module.exports = {
    parser: '@typescript-eslint/parser',
    'env': {
        'es6': true,
        'node': true
    },
    plugins: ['@typescript-eslint'],
    'extends': [
        'standard',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
    }
}