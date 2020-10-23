/*
    Classlar çoklu işlmeler yapabilmemizi sağlar.
    Objeler birden çok nesneyi barındırmamızı sağlar
*/

var newClass = {
    name : "Doğukan",
    lastname : "Turhal",
    age : 22
}
console.log(newClass.name);

function CarModel(carName,carYear,carManufacturer) {
    this.carName = carName;
    this.carYear = carYear;
    this.carManufacturer = carManufacturer;
}
var Car = new CarModel("M3","2020","BMW");

console.log(Car.carManufacturer);

CarModel.prototype.SoldTo = function (name) { // Sonradan Yapı Eklememize Yarar
    return name;
}
console.log(Car.SoldTo("Mr."+newClass.lastname));

// Hata Ayıklama console.log ile yapılmaktadır