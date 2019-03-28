const express = require("express");
const app = express();
const tokens = require("./routes/tokens");

app.use(express.json());
app.use("/", tokens);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
