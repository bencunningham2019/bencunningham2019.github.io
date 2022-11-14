const numberSelector = document.getElementById('selector');

const selectButton = document.querySelector('.select-button').addEventListener('click', select);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);

const output = document.querySelector('.output');

let phoneNumber = [];
let deg = 0;
let clickCount = 0


function reset() {
    window.location.reload();
}

function select() {
    let digit = 0;

    switch(deg) {
        case 0:
            digit = 0;
            break;
        case 36:
            digit = 1;
            break;
        case 72:
            digit = 2;
            break;
        case 108:
            digit = 3;
            break;
        case 144:
            digit = 4;
            break;
        case 180:
            digit = 5;
            break;
        case 216:
            digit = 6;
            break;
        case 252:
            digit = 7;
            break;
        case 288:
            digit = 8;
            break;
        case 324:
            digit = 9;
            break;
    }
    phoneNumber.push(digit);

    clickCount += 1;

    if (clickCount <= 10){
        output.innerHTML = phoneNumber.join(" ");
    }

    if (clickCount == 10) {
        clearInterval(x);
    }
}



let rotated = false;


function rotateSelector() {
    if (deg == 360) {
        deg = 0;
    }
    deg += 36;
    numberSelector.style.transform = 'rotate('+deg+'deg)'; 
    console.log(deg);
}

let x  = setInterval(rotateSelector, 100);


/*
for (i=0; i<10000; i++){
    if (deg == 360) {
        deg = 0;
    }
    deg += 40;
    var selectorPosition = deg
    console.log(selectorPosition);
}
*/



 
