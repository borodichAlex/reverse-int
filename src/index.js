module.exports = function reverse(num = 123) {
    return parseInt([...String(num)].reverse().join(""), 10);
};
