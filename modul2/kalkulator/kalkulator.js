let currentInput = '0';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (currentInput === '0' || shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function toggleSign() {
    if (currentInput === '0') return;
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.slice(1);
    } else {
        currentInput = '-' + currentInput;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (!shouldResetDisplay) {
        currentInput += operator;
        shouldResetDisplay = false;
    }
    updateDisplay();
}

function clearAll() {
    currentInput = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        shouldResetDisplay = true;
    } catch (error) {
        currentInput = 'Error';
        shouldResetDisplay = true;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').innerText = currentInput;
}
