const express = require("express");
const server = express();
// Now use the server
server.use("/", (req, res) => {
  res.send("Welcome form Home Page !!");
});

// server port lisent
server.listen(6000, () => {
  console.log("Server runs in port 6000 ");
});
