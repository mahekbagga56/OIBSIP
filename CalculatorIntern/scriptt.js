let display = document.querySelector('.display');
let operand1 = null;
let operator = null;
let operand2 = null;
let result = null;

function clearDisplay() {
	display.textContent = '';
	operand1 = null;
	operator = null;
	operand2 = null;
	result = null;
}

function deleteLast() {
	let current = display.textContent;
	display.textContent = current.slice(0, -1);
}

function appendValue(value) {
	display.textContent += value;
}

function calculate() {
	let current = display.textContent;
	operand2 = parseFloat(current.slice(current.indexOf(operator) + 1));
	switch(operator) {
		case '+':
			result = operand1 + operand2;
			break;
		case '-':
			result = operand1 - operand2;
			break;
		case '*':
			result = operand1 * operand2;
			break;
		case '/':
			result = operand1 / operand2;
			break;
		default:
			result = null;
	}
	display.textContent = result;
	operand1 = null;
	operator = null;
	operand2 = null;
	result = null;
}

function setOperator(value) {
	if (operand1 === null) {
		operand1 = parseFloat(display.textContent);
	} else {
		calculate();
	}
}

