const express = require("express");
const app = express();
const db = require("./db/db");
const models = require("./models");
const router = require("./routes/index");
const cors = require("cors");
const cookiesParser = require("cookie-parser");

app.use(cookiesParser());
app.use(
  cors({
    origin: "https://the-mobile-factory-1-5284-cnc3grc2m-germancuevas.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use("/", router);

db.sync({ force: false }).then(() => {
  app.listen(5432, () => console.log(`Server ON `));
});
