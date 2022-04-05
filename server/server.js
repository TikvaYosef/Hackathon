require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;


app.get('/', (req, res) => {
    res.status(200).send('server is online');
})

app.listen(port);