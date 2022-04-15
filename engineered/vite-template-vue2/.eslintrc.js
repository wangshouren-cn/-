module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "google", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {},
};
