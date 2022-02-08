class Vehicle {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year; 
    }

    anounce(){
        return (`${this.brand} ${this.model} del ${this.year}`)
    }
}

class Bike extends Vehicle {
    constructor(brand, model, year, tires){
        super(brand, model, year);
        this.tires = tires;
    }
}

let mycar = new Vehicle("Mazda", "CX3", 2016);
let mybike = new Bike("Royal Enfield", "Himalayan", 2020, "Metzeler Sahara")
console.log(mycar.anounce());
console.log(mybike.anounce());