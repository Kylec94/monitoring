const express = require("express");
const path = require("path"); //comes from node

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4545;

app.listen(port, () => console.log(`Listening on port ${port}`));
