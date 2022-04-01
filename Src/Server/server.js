const app = require('./app');
const port = process.env.Port;

require('dotenv').config({ path: './Src/Server/config.env' });

app.listen(port, () => {
    console.log(`App running on  http://localhost:${port}`);
});

process.on('unhandledRejection', err => {
    console.log(err)
});