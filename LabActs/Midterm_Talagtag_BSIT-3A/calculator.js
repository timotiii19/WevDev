function calculate() {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const operation = document.getElementById('operation').value;
const resultDiv = document.getElementById('result');


if (isNaN(num1) || isNaN(num2)) {
alert('Please enter valid numbers in both fields.');
return;
}


let result;
switch (operation) {
case 'add':
result = num1 + num2;
break;
case 'subtract':
result = num1 - num2;
break;
case 'multiply':
result = num1 * num2;
break;
case 'divide':
if (num2 === 0) {
alert('Division by zero is not allowed.');
return;
}
result = num1 / num2;
break;
default:
alert('Invalid operation');
return;
}


resultDiv.textContent = 'Result: ' + result;
}