const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const massive =require('massive');
require('dotenv').config();

const app = express();

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})


app.post('/api/user', controllers.createUser);
app.post('/api/login', controllers.login);