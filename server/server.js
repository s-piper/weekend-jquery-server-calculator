const express = require('express');
const bodyParser = require('body-parser');

//make a server called app
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}))
















app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});