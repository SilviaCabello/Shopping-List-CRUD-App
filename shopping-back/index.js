const express = require("express");
const app = express();
const itemsRoute = require("./routes/items-route");

app.use("/items", itemsRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
