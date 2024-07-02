const express = require('express');
const app = express();
const connect = require('./config/database');

app.listen(3000 , async () => {
    console.log("SERVER IS RUNNING ON 3000");
    await connect();

})