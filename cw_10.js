var newTab = [];

for (var i = 0; i < 20; i++) {
    newTab[i] = Math.floor(Math.random() * 10)
}

console.log(newTab)
console.log("position newTab.indexOf(9):", newTab.indexOf(9))
console.log("position newTab.indexOf(9,3):", newTab.indexOf(9,2))
console.log("position newTab.indexOf(9, -1):", newTab.indexOf(9, -1))
console.log("position newTab.indexOf(6, -3):", newTab.indexOf(6,-3))

var word = 'front end developer'
var find = word.indexOf(' ')

console.log('wyraz: ', word, 'szukany: od end')
console.log('indexOf(end)', word.indexOf('end'))
console.log('slice(szukany, szukany+4)', word.slice(find,find+4))
console.log('slice(szuany, word.length)', word.slice(find,word.length))
console.log('slice(szukany)', word.slice(find))
