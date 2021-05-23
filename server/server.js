const express = require('express');
const bodyParser = require('body-parser');

//make a server called app
const app = express();
const PORT = 5000;

app.use(express.static('/Users/stephenpiper/Documents/Prime/tier_2/weekend-jquery-server-calculator/weekend-jquery-server-calculator/server'));
app.use(bodyParser.urlencoded({extended : true}))



let holdingTank = [];



function getAnswer() {
    console.log('in get answer');

    let answer = '';

    if (math === 'add') {
        answer = parseInt(numOne) + parseInt(numTwo)    
    }
    

    console.log(answer);
    
    
}






app.post('/calculate', (req,res)=>{

    console.log(req.body);
    holdingTank.push(req.body);
    
    res.sendStatus(200);
});


app.get('/calculate', (req, res) => {
    console.log('got to /calculate');

    res.send(holdingTank)
})



getAnswer();





app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});