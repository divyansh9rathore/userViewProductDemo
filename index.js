const createError = require('http-errors');
const express = require('express');
const userView = require('./controllers/userView');

require("./config/db").db;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/getViewProductUser', userView);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(3000, function() {
    console.log('Your server is listening on http://localhost:%d',3000);
});

module.exports = app;
