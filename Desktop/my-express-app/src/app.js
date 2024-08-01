const express = require('express');
const app = express();
const indexRoutes = require('./routes/index');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Rutas
app.use('/', indexRoutes);

module.exports = app;
