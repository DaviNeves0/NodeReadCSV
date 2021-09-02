const express = require('express');
const dbConnection = require('./database/connection');
const routes = require('./routes');
const app = express();


//Using Express Json
app.use(express.json());
//Using routes 
app.use(routes);
dbConnection;
//Running port 3333
app.listen(3333, () => console.log("Server Run"));