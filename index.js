const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const { BASE_URL, PORT } = require("./src/config");
const app = express();

global.__basedir = __dirname;

const corsOptions = {
  origin: BASE_URL,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(
  fileUpload({
    createParentPath: true,
  })
);

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));

initRoutes(app);
app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});
