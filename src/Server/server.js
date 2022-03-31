const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();

app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views", "src/Pages");

app.use(express.static("../Public"));
app.use("/", require("./Routes/index.js"))
app.use("/main", require("./Routes/index.js"))
app.use("/security", require("./Routes/index.js"))
app.use("/downloader", require("./Routes/index.js"))
app.use("/contributors", require("./Routes/index.js"))



const PORT = 3000;
app.listen(PORT, () =>console.log(`Server running on port http://localhost:${PORT}`));

process.on('unhandledRejection', err => {
    console.log(err);
});