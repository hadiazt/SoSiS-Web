const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();

app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("../public"));
app.use("/", require("./Routes/index.js"))


const PORT = 3000;
app.listen(PORT, () =>console.log(`Server running on port http://localhost:${PORT}`));

process.on('unhandledRejection', err => {
    console.log(err);
});