// The import is ES6 funcitonality as well as the const.
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */ // <= This will disable the no-console warning for this file.

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
    // Hard-coded for simplicity.
    res.json([
        {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
        {"id": 1, "firstName":"Tammy", "lastName":"Norton", "email":"tnorton@gmail.com"},
        {"id": 1, "firstName":"Tina", "lastName":"Lee", "email":"tina@gmail.com"}
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
