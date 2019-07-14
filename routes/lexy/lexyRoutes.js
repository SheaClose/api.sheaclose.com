const { getDebt, addFunds } = require("./lexyCtrl");
module.exports = app =>
  app.get("/lexy/debt", getDebt).put("/lexy/debt", addFunds);
