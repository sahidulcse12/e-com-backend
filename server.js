require('dotenv/config');
const mongoose = require('mongoose');
const app = require('./app');

const DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hbl9bsi.mongodb.net/daily-ecommerce?retryWrites=true&w=majority`

mongoose
    .connect(DB)
    .then(() => console.log('Connected to mongoDB with mongoose'))
    .catch((err) => console.log('Connection Failed!!'))

const port = process.env.PORT || 5000;

//console.log(process.env.MONGODB_URL_LOCAL)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})