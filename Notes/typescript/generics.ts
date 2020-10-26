/**
 * Türü belirli olmayan veya kendi belirlediğimiz türdeki verileri almamız için kullanırız.
 * 
 */

function person<T>(name:T):T { //T türünde değişken kabul eden ve T döndüren fonksiyon
    return name;
}
let newPerson = person<string>("Doğukan");
console.log(newPerson);
