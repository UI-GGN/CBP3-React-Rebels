var express = require('express');
const { Sequelize } = require('sequelize');

var app = express();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});


app.get('/', function (req, res) {
  res.send('Lets Hatch A Cab.');
});

app.listen(3001, async() => {
  console.log('Hatch A Cab is listening on port 3001!');

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

});