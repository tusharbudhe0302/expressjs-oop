var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var methodOverride = require('method-override');
var utils = require('./routes/services/db-process/utils/postgresdb');
var app = express();
var routes = express.Router();
const apiConfig = require('./app.config').appConfig;
const APIPort = apiConfig.apiConfig.API_PORT;
const gcPersonRoute = require('./routes/gcperson.routes').users(routes);
const gcRoleRoute = require('./routes/gcrole.routes').role(routes);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    /** Middleware code should go here */
    next();
});
app.get(`/hello`, (req, res) => {
    res.status(200).send(`Hello From API`);
});
app.use('/api/user', gcPersonRoute);
app.use('/api/user/role', gcRoleRoute);
utils.postgresSqlConenction().then(() => {
    app.listen(APIPort, () => {
        console.log(`API is running on PORT ${APIPort}`);
    })
}).catch((err) => {
    console.error(`Postgres Conenction Failed :  ${err}`);
});
