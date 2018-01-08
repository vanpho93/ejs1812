const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });

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

app.get('/add/:name/:age', (req, res) => {
    const { name, age } = req.params;
    const user = new User(name, age);
    users.push(user);
    res.send('Them thanh cong');
});

app.post('/add', parser, (req, res) => {
    const { name, age } = req.body;
    const user = new User(name, age);
    users.push(user);
    // res.send('Them thanh cong');
    res.redirect('/user');
});

app.get('/user', (req, res) => res.render('list', { users }));

app.listen(3000, () => console.log('Server started!'));
