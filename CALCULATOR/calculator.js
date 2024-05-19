function appendToDisplay(value) {
    const display = document.querySelector('.display');
    display.value += value;
}

function clearDisplay() {
    const display = document.querySelector('.display');
    display.value = '';
}

function deleteChar() {
    const display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.querySelector('.display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
