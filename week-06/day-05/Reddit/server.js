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

var query = '';

app.get('/hello', (req, res) => {
  res.send('<p>Hello world</p>');
});

app.get('/posts', (req, res) => {
  query = 'SELECT * FROM post';
  res.setHeader('Content-Type', 'application/json');

  conn.query(query, (err, rows) => {
    if (err) {
      console.error(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.status(200).json(rows);
  })
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
