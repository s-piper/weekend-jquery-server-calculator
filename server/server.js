const express = require('express');
const bodyParser = require('body-parser');

//make a server called app
const app = express();
const PORT = 5000;

app.use(express.static('/Users/stephenpiper/Documents/Prime/tier_2/weekend-jquery-server-calculator/weekend-jquery-server-calculator/server'));
app.use(bodyParser.urlencoded({extended : true}))



let holdingTank = [];


let answer = '';

function getAnswer() {
    console.log('in get answer');

    if (holdingTank[0].math == 'add') {
        console.log('in add');
        answer = parseInt(holdingTank[0].numOne) + parseInt(holdingTank[0].numTwo);  
    } else if (holdingTank[0].math == 'subtract') {
        console.log('in subtract');
        answer = parseInt(holdingTank[0].numOne) - parseInt(holdingTank[0].numTwo);  
    } else if (holdingTank[0].math == 'divide') {
        console.log('in divide');
        answer = parseInt(holdingTank[0].numOne) / parseInt(holdingTank[0].numTwo);  
    } else if (holdingTank[0].math == 'multiply') {
        console.log('in multiply');
        answer = parseInt(holdingTank[0].numOne) * parseInt(holdingTank[0].numTwo); 
    } return holdingTank[0].result = answer;
    
    
}







app.post('/calculate', (req,res)=>{

    console.log(req.body);
    holdingTank.unshift(req.body);
    
    res.sendStatus(200);

    getAnswer();
    console.log(answer);

});


app.get('/calculate', (req, res) => {
    console.log('got to /calculate');

    res.send(holdingTank)
})









app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});