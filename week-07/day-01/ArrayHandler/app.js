const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/arrays", (req, res) => {
  let jsonWhat = req.body.what;
  let jsonArr = req.body.numbers;
  
  if (jsonWhat == 'sum') {
    let sum = 0;
    jsonArr.forEach(num => sum += num);
    res.json({
      "result": sum
    })
  } else if (jsonWhat == 'multiply') {
    let multiply = 1;
    jsonArr.forEach(num => multiply *= num);
    res.json({
      "result": multiply
    })
  } else if (jsonWhat == 'double') {
    let doubleArr = [];
    jsonArr.forEach(num => doubleArr.push(num * 2));
    res.json({
      "result": doubleArr
    })
  } else {
    res.json({
      "error": "Please provide what to do with the numbers!"
    })
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});