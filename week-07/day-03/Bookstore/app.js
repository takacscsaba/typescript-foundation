const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'bookstore'
});

var query = '';
var catParam = '';
var pubParam = '';
var priceLowerParam = '';
var priceGreaterParam = '';


app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

  query = `SELECT book_name,aut_name,cate_descrip,pub_name,book_price
  FROM book_mast
  JOIN category
  On category.cate_id = book_mast.cate_id
  JOIN author
  ON author.aut_id = book_mast.aut_id
  JOIN publisher
  ON publisher.pub_id = book_mast.pub_id`;


  catParam = req.query.category;
	pubParam = req.query.publisher;
  priceLowerParam = req.query.plt;
  priceGreaterParam = req.query.pgt;
});

app.get('/api/bookstore', (req, res) => {

  let isFirst = true;

  if (catParam != undefined) {
    let filterCat = `cate_descrip LIKE '${catParam}'`;
    isFirst ? query += (` WHERE ${filterCat}`) : query += (` AND ${filterCat}`);
    isFirst = false;
  }
  if (pubParam != undefined) {
    let filterPub = `pub_name LIKE '${pubParam}'`;
    isFirst ? query += (` WHERE ${filterPub}`) : query += (` AND ${filterPub}`);
    isFirst = false;
  }
  if (priceLowerParam != undefined) {
    let filterPriceLower = `book_price < '${priceLowerParam}'`;
    isFirst ? query += (` WHERE ${filterPriceLower}`) : query += (` AND ${filterPriceLower}`);
    isFirst = false;
  }
  if (priceGreaterParam != undefined) {
    let filterPriceGreater = `book_price > '${priceGreaterParam}'`;
    isFirst ? query += (` WHERE ${filterPriceGreater}`) : query += (` AND ${filterPriceGreater}`);
    isFirst = false;
  }

  conn.query(query, function(err, rows) {
    if (err) {
      console.error(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
