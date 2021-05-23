console.log('js loaded');

$(handleReady);

function handleReady() {
    console.log('jquery loaded!');


    $('#add').on('click', addIt);
    $('#subtract').on('click', subtractIt);
    $('#multiply').on('click', multiplyIt);
    $('#divide').on('click', divideIt);
    // $('#equals').on('click', equalIt);
    // $('#clear').on('click', clearIt);


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
}

function divideIt() {
    console.log('divide click');
    
    operator = '/'
}

function multiplyIt (){ 
    console.log('multiply click');
    
    operator = '*'
}

// function equalIt() {
    
// }