const person = (name, age) => {
	console.log(this)
	this.name = name
}

person('John', 30)
