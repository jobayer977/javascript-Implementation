var marks = [50, 20, 70, 60, 45, 30];
var max = marks[0];
var min = marks[0];
var i = 0;
while (i < marks.length) {
    if (max < marks[i])
        max = marks[i];
    if (min > marks[i])
        min = marks[i];
    i++;
}
console.log(max, min);
