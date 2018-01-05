const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

reload(app);

app.get('/', (req, res) => {
    const data = {
        name: 'Pho',
        age: 18,
        isAdmin: false,
        subjects: ['NodeJS', 'Javascript', 'Angular', 'Mongo']
    };
    res.render('home', data);
});

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const users = [
    new User('Teo', 10),
    new User('Ti', 15),
    new User('Tun', 12),
];

app.get('/user', (req, res) => {
    res.render('list', { users });
});

app.listen(3000, () => console.log('Server started!'));
