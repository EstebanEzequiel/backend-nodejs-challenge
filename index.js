const express = require('express');
const http = require('http');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = JSON.parse(fs.readFileSync('./server-config.json'));
const post_tareas = require('./controllers/post-tareas');
const get_tareas = require('./controllers/get-tareas');
const put_tareas = require('./controllers/put-tareas');
const pgDatabase = require('./DB');
const colors = require('colors');

const HTTP_PORT = config.puerto;
let port = process.env.PORT || HTTP_PORT;

app.set('port', process.env.PORT || HTTP_PORT);
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());
app.use(bodyParser.json());
app.use(post_tareas);
app.use(put_tareas);
app.use(get_tareas);

var dataBase = fs.readFileSync('./DB.sql').toString();

pgDatabase.query(dataBase, (err, result) => {
    done();
    if (err) {
        console.log('error: ', err);
        process.exit(1);
    }
    process.exit(0);
});

const startHttpServer = () => {
    let server = false;
    server = http.createServer(app);
    server.listen(port, () => {
        console.log(colors.bold.cyan(`\nThe server listening on the port ${port}\n`));
    });
    return server;
};

httpServer = startHttpServer();