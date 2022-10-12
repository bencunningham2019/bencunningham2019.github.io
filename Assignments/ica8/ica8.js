

let btn = document.querySelector('h1');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = changeColor()
});

function changeColor() { 
    var x = Math.floor(Math.random() *256);
        y = Math.floor(Math.random() * 256);
        z = Math.floor(Math.random() * 256);
    
    return  "rgb(" + x + "," + y + "," + z + ")";
};

// function addBy(){
//     first = document.getElementById('first')[whole_number].value; 
//     second = document.getElementById('second')[whole_number].value;
//     document.getElementById('result').innerHTML = first+second;
//     document.getElementById('result');
// }

// function subtractBy(){
//     first = document.getElementById('first').value; 
//     second = document.getElementById('second').value;
//     document.getElementById('result').innerHTML = first-second;
//     document.getElementById('result');
// }

function multiplyBy(){
    first = document.getElementById('first').value; 
    second = document.getElementById('second').value;
    document.getElementById('result').innerHTML = first*second;
    document.getElementById('result');
}

function divideBy(){
        first = document.getElementById('first').value; 
        second = document.getElementById('second').value;
        document.getElementById('result').innerHTML = first/second;
        document.getElementById('result');
}


// convert.addEventListener('click',






