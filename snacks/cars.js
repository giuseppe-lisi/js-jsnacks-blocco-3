
const cars = [

    {brand: 'Toyota', model: 'Corolla', fuel: 'Benzina'},
    {brand: 'Volkswagen', model: 'Gold', fuel: 'Diesel'},
    {brand: 'BWM', model: 'i3', fuel: 'Elettrica'},
    {brand: 'Mercedes-Benz', model: 'Class A', fuel: 'Diesel'},
    {brand: 'Audi', model: 'A5', fuel: 'Elettrica'},
    {brand: 'Ford', model: 'Puma', fuel: 'Benzina'},
    {brand: 'Renault', model: 'Clio', fuel: 'Benzina'},
    {brand: 'Peugeot', model: '208', fuel: 'Gpl'},
    {brand: 'Chevrolet', model: 'Spark', fuel: 'Gpl'},
    {brand: 'Kia', model: 'Sportage', fuel: 'Diesel'}

]

const petrolCars = [];
const dieselCars = [];
const otherCars = [];

cars.map(car => {
    if(car.fuel === 'Benzina') {
        petrolCars.push(car);
    } else if (car.fuel === 'Diesel') {
        dieselCars.push(car);
    } else {
        otherCars.push(car);
    }
});

console.log(petrolCars);
console.log(dieselCars);
console.log(otherCars);
