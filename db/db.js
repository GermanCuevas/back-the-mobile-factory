const Sequelize = require("sequelize");
const db = new Sequelize("dbmobile", "german", "IiGNRk0w0lKfVoyGbsdw5bFE2DXHmcHY", {
  host: "dpg-ch3f6iks3fvkjtvn3etg-a",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
