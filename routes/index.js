const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  //res.sendfile(__dirname + '../index.html');
  res.sendFile('index.html', { root: path.join(__dirname, '../') });
});
router.get('/busqueda', (req, res) => {
  //res.sendfile(__dirname + '../index.html');
  res.sendFile('busqueda.html', { root: path.join(__dirname, '../') });
});

module.exports = router;
