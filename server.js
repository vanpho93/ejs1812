const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
app.listen(3000, () => console.log('Server started!'));
//http://www.free-css.com/free-css-templates/page222/knightone
