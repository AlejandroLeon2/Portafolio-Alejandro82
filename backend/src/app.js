const express = require('express');
const bodyParser = require('body-parser');
const contactRouters = require('./routes/contactRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/mensaje', contactRouters);


module.exports = app;