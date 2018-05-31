const express = require('express');
const reload = require('reload');
const parser = require('body-parser').urlencoded({ extended: false });

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
reload(app);

app.listen(5000, () => console.log('Server started!'));
