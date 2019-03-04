module.exports = {
    "env": {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: ['eslint:recommended', 'react-app'],
    plugins: ['react'],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
            es6: true,
            js: true,
        },
        sourceType: 'module',
        ecmaVersion: 6
    },
    plugins: ['react', 'babel'],
    rules: {
        "no-extra-semi": 2,
        'indent': [1, 4],
        'no-debugger': 1,
        "no-console": [1, { allow: ['error'] }],
        'no-case-declarations': 2,
        'no-empty': 2,
        'no-class-assign': 1,
        'no-unused-vars': 1,
        'linebreak-style': [2, 'unix'],
        'quotes': [1, 'single'],
        'semi': [1, 'never']
    },
    settings: {
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "16.8.3",
        }                                             // a function will be skipped.
    }
};