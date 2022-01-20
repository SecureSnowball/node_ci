const express = require('express');
const logger = require('./services/logger.service');

const app = express();

app.use(express.json());

app.get('/health', (_, res) => {
  logger.info('Health check performed');
  return res.json({ status: 'ok' });
});

module.exports = app;
