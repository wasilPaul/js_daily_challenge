var myCar2 = {
    make: 'VW',
    model: 'Golf 2.0',
    year: 1992,
    color: 'yellow'
}

console.log(myCar2)

function col(car) {
    car.color = 'red'
    return car

}

var newCar = col(myCar2);

console.log(newCar)

