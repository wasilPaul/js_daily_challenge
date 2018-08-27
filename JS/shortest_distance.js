// shortestDistance("1,1,2,1") ➞ 1
// shortestDistance("1,1,3,1") ➞ 2
// shortestDistance("-5,1,3,1") ➞ 8
// shortestDistance("-5,2,3,1")➞ 8.06

function shortestDistance(str) {
	let point = str.split(',')
	return Number(parseFloat(Math.hypot(point[0] - point[2], point[1] - point [3])).toFixed(2))
};

console.log(shortestDistance('-5,2,3,1'))