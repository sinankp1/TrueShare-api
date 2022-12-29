const express = require("express");
const { readdirSync } = require("fs");
const logger = require("morgan")
const cors = require("cors");
const fileupload = require("express-fileupload");
const app = express();
const dotenv = require("dotenv");
const { connect } = require("./config/connection");
dotenv.config();

// middlewares
app.use(express.json())
app.use(logger("dev"))
app.use(cors());
app.use(fileupload({
  useTempFiles:true,
}))
//routes
readdirSync("./routes").map((r) => app.use("/trueshare", require("./routes/" + r)));

//database
connect();


app.listen(process.env.PORT, () => {
  console.log("listening on port 8000");
});