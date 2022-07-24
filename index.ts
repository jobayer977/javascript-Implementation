var marks = [50, 20, 70, 60, 45, 30]

let max = marks[0]
let min = marks[0]
let i = 0
while (i < marks.length) {
	if (max < marks[i]) max = marks[i]
	if (min > marks[i]) min = marks[i]
	i++
}

console.log(max, min)
