/* 
    Arrow Fonksyonu Kullanımları
    Daha Kısa Kod İle Aynı İşlevi Görmektedir
*/

var fonk = function (num1) {
    return num1;
}

var fonk2 = (num1) => {
    return num1;
}
var object = (name,surname) => {
    return name+" " + surname;
}
console.log(fonk2("Arrow Fonksiyon Çalıştı"));
console.log(object("Doğukan","Turhal"));