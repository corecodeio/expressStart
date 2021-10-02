const express = require('express');
const dummy = require('./dummy');

const app = express();

app.post('/transactions', (req, res, next) => {
  //res.status(200).json({message: 'ok', transactions: dummy.TRANSACTIONS});
  res.send('<h1>Transactions</h1>');
});

app.get('/users', (req, res, next) => {
  //res.status(200).json({message: 'ok', transactions: dummy.TRANSACTIONS});
  res.send('<h1>Users</h1>');
});

app.listen(3000, 'localhost', () => {
  console.log('Server is running on port: 3000');
});