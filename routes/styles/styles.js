const brewdb = require("../brewDb.js");

module.exports = app => {
  app.get("/bender/styles", function(req, res) {
    brewdb.style.all((err, style) => {
      res.status(200).json(style);
    });
  });
};
