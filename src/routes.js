// @flow

const express = require('express');

const routes = new express.Router();

routes.get('/', (req, res) => {
  return res.json({ status: 'Successful' });
});

module.exports = routes;
