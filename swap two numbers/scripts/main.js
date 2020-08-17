const form = document.getElementById('form');
const outputValueElement = document.getElementById('output');
const inputValueElement = document.querySelector('input[type="text"]');

form.addEventListener('submit', startProcessing);

function startProcessing(event) {
    event.preventDefault();
    let inputValue = inputValueElement.value;
    let valuesArray = inputValue.split(',');
    let value1 = Number(valuesArray[0]);
    let value2 = Number(valuesArray[1]);
    
    let outputValue = `Input Values are a="${value1}" and b="${value2}"` ;
    
    // Swapping logic starts here
    value1 = value1 + value2;
    value2 = value1 - value2;
    value1 = value1 - value2;
    // Swapping logic ends here

    outputValue+=`and Swaped values are a="${value1}" and b="${value2}".`;
    
    outputValueElement.textContent = outputValue;
   
  }