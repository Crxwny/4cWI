interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const carsList: Car[] = [
    { brand: "BMW", model: "X5", price: 55000, year: 2021 },
    { brand: "Audi", model: "A4", price: 40000, year: 2020 },
    { brand: "Tesla", model: "Model 3", price: 48000, year: 2022 },
    { brand: "VW", model: "Golf", price: 25000, year: 2019 }
];

function printCarsMap(cars: Car[]): void {
    cars.map((car:Car) =>
        console.log(`${car.brand} ${car.model} (${car.year}) - ${car.price}€`)
    );
}

printCarsMap(carsList);

function getTotalPriceReduce(cars: Car[]): number {
    return cars.reduce((sum:number, car:Car):number => sum + car.price, 0);
}

console.log("Total Price:", getTotalPriceReduce(carsList));

function getExpensiveCarsFilter(cars: Car[], minPrice: number): Car[] {
    return cars.filter((car:Car) => car.price > minPrice);
}

console.log("Expensive Cars:", getExpensiveCarsFilter(carsList, 45000));

function sortCarsByYear(cars: Car[]): Car[] {
    return cars.sort((a:Car, b:Car) => a.year - b.year);
}

console.log("Cars sorted by year:", sortCarsByYear(carsList));

function findCarByModel(cars: Car[], model: string): Car {
    return cars.find((car:Car) => car.model === model);
}

console.log("Find Car by Model (Model 3):", findCarByModel(carsList, "Model 3"));