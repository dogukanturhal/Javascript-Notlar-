/*
    Default parametreler değişken kullanmadan süreci çalıştırmamızı sağlar
    Rest Parametresi ...(3 nokta) olarak tanımlanmaktadır. Obje veya dizi olan verileri içerisinde bulunan değişkenleri sırasıyla kendisinin önünde tanımlar
    Şablon bir metin dizisi içerisinde değişken kullanabilmemizi sağlar
*/

let circleArea = (r,pi=3.14) => {
    return r*pi;
}
console.log(circleArea(5));
// veya
console.log(circleArea(5,3));


let logArr = (a,b,...arr) => {
    
    return console.log(a,b,arr);
}
logArr(2,5,22,3,5,6,9,88);


let template = [{name:"Doğukan", surname:"Turhal"},{carType:"Sedan",carYear:"2020"}];
let person = template[0].name + template[0].surname + template[1].carType;
let person2 = $(template[0].name);
console.log(person);
console.log(person2); // Ecmascript 6 olduğundan hata verecektir. Ama aslında hata yoktur.
