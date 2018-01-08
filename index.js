const express = require('express');
const reload = require('reload');
const User = require('./models/User');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

reload(app);

const users = [
    new User('Teo', 10),
    new User('Ti', 15),
    new User('Tun', 12)
];

app.get('/', (req, res) => res.render('home'));
app.get('/user', (req, res) => res.render('list', { users }));

app.listen(3000, () => console.log('Server started!'));
