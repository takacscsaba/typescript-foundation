const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

app.get('/api/newyorktimes/:q', (req, res) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=fcd23a83b3324cb4949f25b57e011623&q=${req.params.q}`;
 
fetch(url)
  .then((resp) => (resp.json()))
  .then(response => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});