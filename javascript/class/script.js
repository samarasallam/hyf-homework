const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];



// creat an array of all car colors


const colors = cars.map(x => console.log(x) );
console.log(colors)

// list the cars that can go above 50

function speedAbove(car) {
  return car.speed >= 50;
}
let fastCars= cars.filter(speedAbove);
console.log(fastCars);

// creat an new array where the cars are sorted by speed  \sort

cars.sort((carA,carB)=> carA.speed - carB.speed)
console.log(cars)

//  \forEach add a new field called gears within each array, where gears are randomly between 2-5 

cars.forEach(car=> car.gears= math.floor(math.random()*3)*4);

console.log(cars)

