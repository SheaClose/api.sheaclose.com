const { getBreweries } = require("./breweryCtrl.js");

module.exports = app => {
  app.get("/bender/breweries", getBreweries);
};
