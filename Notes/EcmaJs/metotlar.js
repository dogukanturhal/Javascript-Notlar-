/*
    Bir Objeye Başka Bir Objenin Eklenmesi Durumudur
    Eğer Aynı İsimde Bir Obje Varsa Kaynak Dosyadaki Objeyi Ezecektir
*/

let objectSource = {source: "item"};
let newObject   = {requested: "new item"};
let newObject2 = {otherRequested : "other item"};

Object.assign(objectSource,newObject,newObject2); // Ekleme Gerçekleştirildi
console.log(objectSource);

console.log([10,52,9,6,8,7,66,5,102].find(x => x>100)); // Arama yapma (Bir tane değer döndürür)
console.log([10,52,9,6,8,7,66,5,102].findIndex(x => x>100)); // Indek olarak arama yapma
console.log("*".repeat(10)); // Değişkenlerde Repeat çalışmaz

let text = "Yeni yıla hazırlık yapılmaktadır, gelişmelerden haberdar kalın!";
console.log(text.startsWith("Y")); // Metin başlangıcı arama varsa TRUE yoksa FALSE
console.log(text.startsWith("Yeni"));
console.log(text.startsWith("ha"));
console.log(text.endsWith("kalın!")); // Metin Bitişi arama varsa TRUE yoksa FALSE 
console.log(text.includes("hazırlık")); // Metin içinde arama varsa TRUE yoksa FALSE
console.log(text.includes(" "));
console.log(text.includes("yapıl",0)); // x indisten sonra aramada var mı yokmu?

console.log(Math.sign(-14)); // Sayı pozitif ise +1 0 ise 0 negatif ise -1 döndürür     
