module.exports = {
  extends: ["plugin:prettier/recommended"],

  rules: {
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
};
