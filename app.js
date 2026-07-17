const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello hiiii from jenkins, added webhook so that github directly push the code on target server, this in node pipeline cicd executed on target server');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
