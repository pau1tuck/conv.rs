module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module", // Allows for the use of imports
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    env: {
        node: true,
        es6: true,
        root: true,
    },
    root: true,
    plugins: [
        "@typescript-eslint/eslint-plugin",
        "import",
        "sort-keys-fix",
        "simple-import-sort",
    ],
    extends: [
        "airbnb-typescript-prettier",
        // "plugin:@typescript-eslint/recommended",
        // "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended",
    ],
    rules: {
        "import/prefer-default-export": [0], // off
        "no-console": [1], // warn
        "max-classes-per-file": [1], // error
        "class-methods-use-this": [2],
        "@typescript-eslint/no-explicit-any": [
            "warn",
            { ignoreRestArgs: true },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { argsIgnorePattern: "^_" },
        ],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};
