const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});