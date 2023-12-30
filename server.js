const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('hi nam 123');
});

app.listen(PORT, () => console.log('Server is running at localhost:8080'));