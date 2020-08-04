const { calculateTip } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(100, .3)
    expect(total).toBe(130)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(100)
    expect(total).toBe(110)
})
