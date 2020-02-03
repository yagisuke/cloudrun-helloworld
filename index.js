const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Hello world received a request.');
  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!!`);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
