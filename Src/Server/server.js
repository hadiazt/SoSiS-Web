const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();

app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views", "Src/Pages");

app.use(express.static("../Public"));
app.use("/", require("./Routes/website.routing.js"))
app.use("/main", require("./Routes/main.js"))
// app.use("/security", require("./Routes/.js"))
// app.use("/downloader", require("./Routes/.js"))
// app.use("/contributors", require("./Routes/.js"))

// app.use("/main/love", require("./Routes/.js"))


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

process.on('unhandledRejection', err => {
    console.log(err);
});



const express = require("express"),
    expressIp = require('express-ip'),
    compression = require("compression"),
    websiteRouter = require('./routes/website.routing'),

    app = express();



app.set("view engine", "ejs");
app.set("views", "Src/Pages");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../Public"));

app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.json({ limit: '10kb' }));

app.use(compression());
app.use(expressIp().getIpInfoMiddleware);

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/', websiteRouter);
app.use(require("./controllers/error.controller").get404);

module.exports = app;