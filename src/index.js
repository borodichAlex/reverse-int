module.exports = function reverse(n) {
	return parseInt((n + '').split('').reverse().join(''))
}
