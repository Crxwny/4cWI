interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

const cars: Car[] = [
    { brand: "BMW", model: "X5", price: 55000, year: 2021 },
    { brand: "Audi", model: "A4", price: 40000, year: 2020 },
    { brand: "Tesla", model: "Model 3", price: 48000, year: 2022 },
    { brand: "VW", model: "Golf", price: 25000, year: 2019 }
];


// 1) Funktionen mit forEach

function getTotalPrice(cars: Car[]): number {
    let sum:number = 0;
    cars.forEach((car:Car) => {
        sum += car.price;
    });
    return sum;
}

function printCars(cars: Car[]): void {
    cars.forEach((car:Car) => {
        console.log(`${car.brand} ${car.model} (${car.year}) - ${car.price}€`);
    });
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    const result: Car[] = [];
    cars.forEach((car:Car) => {
        if (car.price > minPrice) {
            result.push(car);
        }
    });
    return result;
}

// 2) Funktionen mit Array-Funktionen

