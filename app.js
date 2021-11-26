const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
// const mysql = require('mysql')
// const app =express();

// app.use(bodyParser.urlenconded({extend:false}));
// app.use(bodyParser.json());


app.listen(port,()=>console.log(`listening on ${port}`))