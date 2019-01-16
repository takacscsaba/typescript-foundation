const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'reddit'
});

app.get('/hello', (req, res) => {
  res.send('<p>Hello world</p>')
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
