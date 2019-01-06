const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if (input) {
    res.json({
      received: input,
      result: input * 2,
    });
  } else {
    res.json({
      error: "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if(name && title) {
    res.json({
        welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    });
  } else if (name === undefined && title) {
    res.json({
      "error": "Please provide a name!",
    })
  }
  else if (title === undefined && name) {
    res.json({
      "error": "Please provide a title!",
    });
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let input = req.params.appendable;
  let a = 'a';
  let result = input.concat(a);
  if(result) {
    res.json({
      appended: result
    });
  } else {
    res.writeHead(404);
  }
});

app.use(express.json());
app.post('/dountil/:action', (req, res) => {
  let action = req.params.action;
  let actionNum = req.body.until;

  if (action == 'sum') {
    let sum = 0;
    for (let i = 0; i <= actionNum; i++) {
      sum += i;
    }
    res.json({
      "result": sum
    })
  } else if (action == 'factor') {
    let factor = 1;
    for (let i = 1; i <= actionNum; i++) {
      factor *= i;
    }
    res.json({
      "result": factor
    })
  } else {
    res.json({
      "error": "Please provide a number!"
    })
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});