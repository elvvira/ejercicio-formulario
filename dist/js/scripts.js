const formElement = document.getElementById('form');
const cvcElement = document.getElementById('cvc');
const nameElement = document.getElementById('name');
const dateElement = document.getElementById('date');
const cardNumberElement = document.getElementById('card-number');

formElement.addEventListener('keyup', (event)=>{
 
    cvcElement.textContent = (formElement.cvc.value);

    nameElement.textContent = (formElement.name.value);
    
    dateElement.textContent = (formElement.date.value);
    
    cardNumberElement.textContent = (formElement.card.value);
    
})
