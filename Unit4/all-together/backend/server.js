require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes')
const database = require('./my-database');

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//moved all API stuff to routes/routes.js
app.use(routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
