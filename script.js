function convert(unit) {
    if (unit === 'celsius') {
        const celsiusInput = document.getElementById('celsius');
        const fahrenheitInput = document.getElementById('fahrenheit');
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
    } else if (unit === 'fahrenheit') {
        const celsiusInput = document.getElementById('celsius');
        const fahrenheitInput = document.getElementById('fahrenheit');
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    }
}
