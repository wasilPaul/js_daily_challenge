var newTab = [];

for (var i = 0; i < 20; i++) {
    newTab[i] = Math.floor(Math.random() * 10)
}

console.log(newTab)
console.log("position newTab.indexOf(9):", newTab.indexOf(9))
console.log("position newTab.indexOf(9,3):", newTab.indexOf(9,2))
console.log("position newTab.indexOf(9, -1):", newTab.indexOf(9, -1))
console.log("position newTab.indexOf(6, -3):", newTab.indexOf(6,-3))
