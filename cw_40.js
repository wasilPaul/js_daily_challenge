function findNear(x) {

    let a = [];

    function add(z) {
        while (!Number.isInteger(Math.sqrt(z))) {
            z++
            z
        }
        return z
    }

    function sub(y) {
        while (!Number.isInteger(Math.sqrt(y))) {
            y--
        }
        return y
    }

    a.push(add(x))
    a.push(sub(x))

    return   a[1]-x >= x - a[0] ? a[1] : a[0]

    console.log(a)
}