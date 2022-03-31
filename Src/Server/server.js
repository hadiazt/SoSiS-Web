const express = require("express"),
    expressIp = require('express-ip'),
    compression = require("compression"),
    websiteRouter = require('./Routes/website.routing'),

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
app.use("/main", websiteRouter);
app.use("/security", websiteRouter);
app.use("/downloader", websiteRouter);
app.use("/contributors", websiteRouter);

app.use("/main/love", websiteRouter);

app.use(require("./controllers/error.controller").get404);

process.on('unhandledRejection', err => {
    console.log(err);
});

module.exports = app;

