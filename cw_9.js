var milkTemp = 20
var addTemp = Math.floor(Math.random() * 20)

/*while (milkTemp<100){
    milkTemp+=addTemp
    console.log(milkTemp)
}*/


/*
for (;milkTemp<100; milkTemp+=addTemp){

    if(milkTemp >=100){
        break;
    }

    console.log(milkTemp)
}*/

var table100 = []

for (var i = 0; i < 100; i++) {
    table100.push(Math.floor(Math.random() * 10))
}

console.log(table100)

var newTab = [];

for (var i = 0; i < 10; i++) {
    newTab[i] = Math.floor(Math.random() * 10)
}
console.log(newTab)
console.log(newTab.slice(3, 7))


function losowe(x) {

    for (var i = 0; i < x; i++) {
        newTab[x-1] = Math.floor(Math.random() * 10)
        if (nawTable [x-1]%2==0){
            return nawTable[x-1]
        }else {losowe}
            }
}

