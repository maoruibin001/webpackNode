/**
 * Created by lenovo on 2017/6/5.
 */
var express = require('express');

const app = express();

app.use('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.end('hello , i love you')
})

module.exports = app;