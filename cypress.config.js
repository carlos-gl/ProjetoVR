const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vr.com.br/'
  },
  viewportWidth: 1400,
  viewportHeight: 800,
});
