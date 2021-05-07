const express = require('express');
const app = express();

const vehicles = require('./challenge/mocks/vehicles.json');

app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  })
});

app.get('/vehicles', (req, res) => {
  res.json(vehicles);
})

app.listen('8080', () => {
  console.log('The server is running at port 8080');
});