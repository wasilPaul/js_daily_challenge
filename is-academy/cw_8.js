function age(x) {
    switch (x){
        case 18:
            console.log('pelnoletni')
            break
        case 19:
            console.log('bardzo pełnoletni')
            break
        case 300:
            console.log('This is Sparta!!!!')
            break
        default:
            break
    }
}


var first = 1, second =2, third = 3

function asRight(x){
    return x==1 ? console.log('jest 1') : x ==2 ? console.log('jest 2') : console.log('jest 3')
}


var random = Math.floor(Math.random()*10)

for (i =0 ; i < 10; i++){
    var x = Math.floor(Math.random()*10)
    if (x > 5){
        console.log(x)}}