require("dotenv").config();
const express = require("express"),
  { json } = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  {
    secret,
    mongoUri,
    resave,
    saveUninitialized,
    connectionString
  } = require("./serverConfig.js"),
  port = process.env.PORT,
  app = express(),
  masterRoutes = require("./masterRoutes.js"),
  session = require("express-session"),
  massive = require("massive");

app.use(session({ secret, resave, saveUninitialized }));
app.use("/", express.static(__dirname + "/public"));
mongoose.connect(mongoUri, { useNewUrlParser: true }, () =>
  console.log("Connected to mongoDB")
);

massive(connectionString)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("connected to massiveDB");
  })
  .catch(console.log);

app.use(json());
app.use(cors());

masterRoutes(app);

app.listen(port, () => {
  console.log(`This is Dr. Crane... I'm listening. Port:${port}`);
});
