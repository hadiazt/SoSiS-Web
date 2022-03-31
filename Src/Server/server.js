const app = require('./app');

require('dotenv').config({ path: './Src/Server/config.env' });

app.listen(process.env.Port, () => {
    console.log(`App running on  http://localhost:${port}`);
});

process.on('unhandledRejection', err => {
    console.log(err)
});