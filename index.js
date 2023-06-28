const express = require('express');
const app = express();
const port = 8080;
const expressLayout = require('express-ejs-layouts');
app.use(expressLayout);
const db = require('./config/mongoose');


app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});