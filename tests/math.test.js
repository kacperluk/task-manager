const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(100, .3)
    expect(total).toBe(130)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(100)
    expect(total).toBe(110)
})

test('Should translate fahrenheit to celsius', () => {
    const temp = fahrenheitToCelsius(32)
    expect(temp).toBe(0)
})

test('Should translate celsius to fahrenheit', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})