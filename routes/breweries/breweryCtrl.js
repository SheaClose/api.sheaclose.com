const brewdb = require("../brewDb.js"),
  axios = require("axios"),
  serverConfig = require("../../serverConfig.js");

module.exports = {
  getBreweries({ query }, res) {
    let { breweryName, lng, lat } = query;
    if (breweryName) {
      brewdb.search.breweries({ q: breweryName }, (err, brewery) => {
        if (err) {
          return res.json(err);
        }
        return res.status(200).json(brewery);
      });
    }
    if (lng) {
      debugger;
      axios
        .get(
          `https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=${lat}&lng=${lng}&key=${
            serverConfig.brewDbKey
          }`
        )
        .then(({ data }) => {
          debugger;
          res.status(200).json(data);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    }
  }
};
