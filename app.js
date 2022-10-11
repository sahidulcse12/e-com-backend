require('express-async-errors');
const express = require('express');
const app = express();
const error = require('./middlewares/error');



require('./middlewares/')(app)
require('./middlewares/router')(app)
app.use(error);


module.exports = app;

