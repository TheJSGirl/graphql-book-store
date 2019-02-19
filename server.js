const express = require("express");
const mainRoutes = require('./src/modules/index');
const app = express();

mainRoutes(app);
app.get('/', (req, res) => {
    console.log("here");
})  

app.listen(3000, (req, res) => {
    console.log(`listing at port 3000`)
})
