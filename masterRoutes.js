const styles = require("./routes/styles/styles"),
  beers = require("./routes/beers/beersRoute"),
  breweries = require("./routes/breweries/breweryRoutes"),
  lexy = require("./routes/lexy/lexyRoutes");

module.exports = app => {
  styles(app);
  beers(app);
  breweries(app);
  lexy(app);
};
