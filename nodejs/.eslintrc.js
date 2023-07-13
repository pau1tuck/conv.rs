module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module", // Allows for the use of imports
    },
    extends: [
        "airbnb-typescript-prettier",
        "plugin:@typescript-eslint/recommended",
        // "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ["import", "sort-keys-fix", "simple-import-sort"],
    rules: {
        "import/prefer-default-export": [0], // off
        "no-console": [1], // warn
        "max-classes-per-file": 1, // error
        "class-methods-use-this": [2],
        "@typescript-eslint/no-explicit-any": [
            "warn",
            { ignoreRestArgs: true },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
        ],
    },
};
