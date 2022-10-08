module.exports = {
  extends: ["eslint:recommended"],
  ignorePatterns: [
    "!.*",

    ".git/",
    "node_modules/",
    "bower_components/",
    "jspm_packages/",
    ".npm/",
    "vendor/",

    "lib-cov/",
    "coverage/",
    ".nyc_output/",
    ".cache/",

    "build/",
    "dist/",
    "tmp/",

    "**/*.min.*",
  ],
};
