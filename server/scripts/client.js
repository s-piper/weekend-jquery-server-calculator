console.log('js loaded');

$(handleReady);

function handleReady() {
    console.log('jquery loaded!');


    $('#add').on('click', addIt);
    $('#subtract').on('click', subtractIt);
    $('#multiply').on('click', multiplyIt);
    $('#divide').on('click', divideIt);
    $('#equals').on('click', equalIt);
    // $('#clear').on('click', clearIt);

    getHistory();

}


let operator = '';

function addIt() {
    console.log('add click');
    
    operator = '+';
    console.log(operator);
    
}

function subtractIt() {
    console.log('subtract click');
    
    operator = '-';
    console.log(operator);

}

function divideIt() {
    console.log('divide click');
    
    operator = '/'
    console.log(operator);

}

function multiplyIt (){ 
    console.log('multiply click');
    
    operator = '*'
    console.log(operator);

}

function equalIt() {
    let newOperation ={
        numOne: $('#firstNumberIn').val(),
        numTwo: $(`#secondNumberIn`).val(),
        math: operator,
    }

    console.log(newOperation);

    $.ajax({
        url: '/calculate',
        method: 'POST',
        data: newOperation // becomes req.body on the server
    }).then(response => {
        console.log(response);
        //possible  future function to clear inputs
        
    })
    
}

function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then(function (response) {
        //respnse is what was in the res.send()
        console.log(response);
        //empty DOM
        $('#history').empty();
        //append quotes to DOM
        for (let number of response) {
            $('#history').append(`
            <li>${number.numOne} ${number.math} ${number.numTwo}</li>
            `)
        }

    })
}