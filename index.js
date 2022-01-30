const express = require("express");

const axios = require("axios");

const app = express();

app.get('/:id', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/posts/' + req.params["id"])
  .then(json => res.send(json["data"]))
  .catch(e => {res.sendStatus(500)});
});

app.post('/', (req, res) => {
  axios.post('https://jsonplaceholder.typicode.com/posts/', req.body)
  .then(json => res.sendStatus(201))
  .catch(e => {res.sendStatus(500)});
});

console.log("Listening on port 8080");

app.listen(8080);