require('dotenv').config();
require('./db');
const express = require('express');
const app = express();
const port = process.env.PORT;

const workflowRouter = require('./routes/workflow-process-route');

app.use('/workflow', workflowRouter);

app.get('/', (req, res) => {
    res.status(200).send('server is online');
})

app.listen(port);