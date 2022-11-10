const formElement = document.getElementById('form');
const cvcElement = document.getElementById('cvc');
const nameElement = document.getElementById('name');
const dateElement = document.getElementById('date');
const cardNumberElement = document.getElementById('card-number');

formElement.addEventListener('keyup', (event)=>{
    console.log(formElement.cvc.value);
    cvcElement.textContent = (formElement.cvc.value);
    console.log(formElement.name.value);
    nameElement.textContent = (formElement.name.value);
    console.log(formElement.date.value);
    dateElement.textContent = (formElement.date.value);
    console.log(formElement.card.value);
    cardNumberElement.textContent = (formElement.card.value);
})
