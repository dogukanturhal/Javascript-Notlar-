function sum(num1:number , num2:number):void { // VOid Tipi Fonksiyon Değer Döndürmez
    let total:number = num1+num2;
    console.log(total);
}
function sum2(num1:number , num2:number):number { // Değer Döndürür
    return num1+num2;
}
console.log(sum2(5,9));

function invite(...invited:string[]):string {
    return invited.join(" ");
}
console.log(invite("Doğukan" , "Melisa"));

function multiply(num1:number , num2 ?: number) : number { // Son parametremizi belirsiz hale getirebiliriz
    if (num2) {
        return num1 * num2;
    }
    else{
        return num1;
    }
}
console.log(multiply(5)); // İstersek 2. değeride atama yapabiliriz
