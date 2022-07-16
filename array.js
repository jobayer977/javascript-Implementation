const arr = [0, 1, 2, 3, 4, 2]

Array.prototype.ofImpl = function (...args) {
	return this.push(...args)
}
