const cors = require("cors");
const express = require("express");
const { BASE_URL, PORT } = require("./src/config");
const app = express();

const corsOptions = {
  origin: BASE_URL,
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));

initRoutes(app);
app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
