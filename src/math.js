const calculateTip = (total, tipPercent = .1) => total + (total * tipPercent)

module.exports = {
    calculateTip
}