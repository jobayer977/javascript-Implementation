const arr = ['Java', 'C++', 'PHP']

Array.prototype.sliceImpl = function (start = 0, end = this.length) {
	let arr = []
	for (let i = 0; i < this.length; i++) {
		if (start <= i && end >= i) {
			arr.push(this[i])
		}
	}
	return arr
}
