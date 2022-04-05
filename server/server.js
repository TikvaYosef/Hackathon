require('dotenv').config();
require('./db');
const express = require('express');
const app = express();
const port = process.env.PORT;

const workflowRouter = require('./routes/workflow-process-route');
const companiesRouter = require('./routes/companies-process-route');
app.use('/workflow', workflowRouter);
app.use('/company',companiesRouter);


app.get('/', (req, res) => {
    res.status(200).send('server is online');
})

app.listen(port);