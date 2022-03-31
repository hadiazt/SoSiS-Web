const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on  http://localhost:${port}`);
});


process.on('unhandledRejection', err => {
    console.log(err)
});