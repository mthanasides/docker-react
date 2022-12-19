const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('blah <h3>  <span>How Our Discount Card Works</span> </h3>');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
