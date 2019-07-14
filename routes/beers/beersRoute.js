const beersCtrl = require("./beersCtrl.js");

module.exports = app => {
  app.get("/bender/beers", beersCtrl.getBeersByBrewery);
};
