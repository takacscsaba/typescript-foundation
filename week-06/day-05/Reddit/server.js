const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

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

  queryConnector(query, res);
});

app.post('/posts', (req, res) => {
  let jsonTitle = req.body.title;
  let jsonUrl = req.body.url;
  query = `INSERT INTO post(title, url) 
  VALUES ('${jsonTitle}', '${jsonUrl}')`;

  conn.query(query, (err, rows) => {
    if (err) {
      console.error(err.toString());
      res.status(500).send('Database error');
      return;
    }
    queryConnector(`SELECT * FROM post ORDER BY post_id DESC LIMIT 1`, res);
    res.status(201);
    })
});

function queryConnector(query, res) {
  conn.query(query, (err, rows) => {
  if (err) {
    console.error(err.toString());
    res.status(500).send('Database error');
    return;
  }
    res.json(rows);
  })
}

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
