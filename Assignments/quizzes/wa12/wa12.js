//Trial 1

//Selecting the class 'output' from doc which is the current phone number
const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);

//Creating functionality for all the buttons and adding function to them when clicked
const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plusRunner);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);

//Function for submit button. Displays alert of the current text content of the output.
function submit(){
    alert(output.textContent)
}

//Function for reset. Takes textContent of output and assigns it to original value.
function reset() {
    outputInt = 0000000000
    output.textContent = outputInt;
}

//Function for minus. If output is greater than 0, subtract 1 from the output and display that output.
function minus(number) {
    if (outputInt > 0){
        outputInt -= 1;
        output.textContent = outputInt; }
}

//Function to allow this parameter to go into addEventListener above
function plusRunner(){
    plus(outputInt);
}

//Function for minus. If output is less than 9999999999, add 1 to the output and display that output.
function plus(number) {
    if (outputInt < 9999999999) {
        outputInt += 1;
        output.textContent = outputInt;
    } 
}

function random() {
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max){
    const num = Math.floor(Math.random() * (max-min+1)) + min;
    return num;
}


//Slider

var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output")

function update(){
    sliderOutput.textContent = slider.value;
}

// const button = document.querySelector('.button');
// const output = document.querySelector('.output');
// let phone_content = document.querySelector('.phone');

// button.addEventListener('click', updateOutput);

// function updateOutput() {
//     output.textContent = phone_content.value;
// }

