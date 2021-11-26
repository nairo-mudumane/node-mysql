const express = require('express');
const App = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

App.use(cors());
App.use(express.urlencoded({ extended: false }));
App.use(express.json());
require('./routes/')(App);

App.listen(port, console.log(`listening on: ${port}`));
