const express = require('express');
const app = express();
const port = process.env.PORT || 9090;

app.route('/').get((req, res) => {
    res.send('hello world!');
  });

app.listen(port, () => {
    console.log(`Running server on port ${port}.`);
  });