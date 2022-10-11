require('dotenv/config');
const mongoose = require('mongoose');
const app = require('./app');

mongoose
    .connect(process.env.MONGODB_URL_LOCAL)
    .then(() => console.log('Connected to mongoDB'))
    .catch((err) => console.log('Connection Failed!!'))

const port = process.env.PORT || 5000;

//console.log(process.env.MONGODB_URL_LOCAL)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})