const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/database');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;

const apiRoutes = require('./routes/index.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.listen(PORT , async () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
    await connect();
})