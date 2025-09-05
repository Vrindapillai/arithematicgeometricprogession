// Get references to the HTML elements
const currentInputDisplay = document.getElementById('current-input');
const resultDisplay = document.getElementById('result-display');
const keypad = document.querySelector('.keypad');

// State variables for the calculator's logic
let currentExpression = '';
let isResultDisplayed = false;

// Add a single event listener to the keypad container
keypad.addEventListener('click', (event) => {
    // Check if the clicked element is a button
    const button = event.target.closest('button');
    if (!button) {
        return;
    }

    const value = button.dataset.value;

    // Reset for a new calculation if a result was just shown
    if (isResultDisplayed && value !== 'del' && value !== '=' && value !== 'clear') {
        currentExpression = '';
        isResultDisplayed = false;
    }

    switch (value) {
        case 'clear':
            currentExpression = '';
            resultDisplay.textContent = '0';
            isResultDisplayed = false;
            break;
        case 'del':
            currentExpression = currentExpression.slice(0, -1);
            if (currentExpression === '') {
                resultDisplay.textContent = '0';
            }
            break;
        case '=':
            calculate();
            isResultDisplayed = true;
            break;
        case 'sin':
        case 'cos':
        case 'tan':
            currentExpression += `Math.${value}(`;
            break;
        case 'sqrt':
            currentExpression += 'Math.sqrt(';
            break;
        case '^':
            currentExpression += '**';
            break;
        default:
            currentExpression += value;
            break;
    }

    currentInputDisplay.textContent = currentExpression;
});

/**
 * Calculates the expression and displays the result.
 */
function calculate() {
    try {
        // Simple string sanitization to prevent common security issues with eval()
        const sanitizedExpression = currentExpression.replace(/[^0-9+\-*/().Mathsin()cos()tan()sqrt()**]/g, '');
        
        // A dedicated math parser is safer, but for this example, eval is used with caution.
        const result = eval(sanitizedExpression);

        if (isNaN(result) || !isFinite(result)) {
            resultDisplay.textContent = 'Error';
        } else {
            resultDisplay.textContent = result;
        }
    } catch (error) {
        resultDisplay.textContent = 'Error';
    }
}
