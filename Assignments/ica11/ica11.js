
const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const deliveryButton = document.querySelector('.new-delivery');
deliveryButton.addEventListener('click', getDelivery);

let joke = 'https://v2.jokeapi.dev/joke/Any?safe-mode'


async function getQuote() {
    //console.log('test click worked');
    let text = await fetch(joke)
    let response = await text.text();
    
    let json_response = JSON.parse(response);
    console.log(json_response['setup'])
    // .then(text => text.text());
    // console.log(text['message']);
    
    displayQuote(json_response['setup']) 
}

async function getDelivery() {
    //console.log('test click worked');
    let text = await fetch(joke)
    let response = await text.text();
    
    let json_response = JSON.parse(response);
    console.log(json_response['delivery'])
    // .then(text => text.text());
    // console.log(text['message']);
    
    displayDelivery(json_response['delivery'])
}

function displayQuote(x) {
    const quoteBox = document.querySelector('#js-quote-text');
    // console.log('display quote working');
    let textMessage = document.createTextNode(x);

    // quoteBox.appendChild(textMesssage);
    document.getElementById('js-quote-text').textContent = x;
}

function displayDelivery(x) {
    const quoteBox = document.querySelector('#js-delivery-text');
    // console.log('display quote working');
    let textMessage = document.createTextNode(x);

    // quoteBox.appendChild(textMesssage);
    document.getElementById('js-delivery-text').textContent = x;
}

getQuote();

