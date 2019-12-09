const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const connection = require('./config/database')

connection.authenticate()
  .then(() => console.log('connected to the database'))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require('./models');

app.use('/', require('./routes'));
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => console.log('Server is running on port 3000'));