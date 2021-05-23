console.log('js loaded');

$(handleReady);

function handleReady() {
    console.log('jquery loaded!');


    $('#add').on('click', addIt);
    $('#subtract').on('click', subtractIt);
    $('#multiply').on('click', multiplyIt);
    $('#divide').on('click', divideIt);
    $('#equals').on('click', equalIt);
    $('#clear').on('click', clearIt);


}


let operator = '';


function clearIt() {
    $('#firstNumberIn').val('');
    $(`#secondNumberIn`).val('');
    
}

function addIt() {
    console.log('add click');
    
    operator = 'add';
    console.log(operator);
    
}

function subtractIt() {
    console.log('subtract click');
    
    operator = 'subtract';
    console.log(operator);

}

function divideIt() {
    console.log('divide click');
    
    operator = 'divide'
    console.log(operator);

}

function multiplyIt (){ 
    console.log('multiply click');
    
    operator = 'multiply'
    console.log(operator);

}
//functions to grab what the user clicked.  Probably could be a whole lot drier

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
        data: newOperation 
    }).then(response => {
        console.log(response);
        // grabs the operator/inputs and shoots to server
        
    })

    getHistory();
    //kicks off history function

    
}

function getHistory(){
    $.ajax({
        method: 'GET',
        url: '/calculate'
    }).then(function (response) {

        console.log(response);
        //empty DOM
        $('#answer').empty();
        $('#answer').append(`
            <li>${response[0].result}</li>`);

        $('#history').empty();
        //append quotes to DOM
        for (let number of response) {

            if (number.math === 'add') {
                $('#history').append(`
                <li>${number.numOne} + ${number.numTwo} = ${number.result}</li>`)
            } else if (number.math === 'subtract') {
                $('#history').append(`
                <li>${number.numOne} - ${number.numTwo} = ${number.result}</li>`)

            } else if (number.math === 'multiply') {
                $('#history').append(`
                <li>${number.numOne} * ${number.numTwo} = ${number.result}</li>`)

            } else if (number.math === 'divide') {
                $('#history').append(`
                <li>${number.numOne} / ${number.numTwo} = ${number.result}</li>`)

            }
        }

    }) //gets the holdingTank array and appends the DOM based on the operator

}