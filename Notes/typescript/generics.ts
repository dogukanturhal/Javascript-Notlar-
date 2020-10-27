/**
 * Türü belirli olmayan veya kendi belirlediğimiz türdeki verileri almamız için kullanırız.
 * Interfaceler içinde yapılmaktadır ve birbirine implemente edilebilir.
 */

function person<T>(name:T):T { //T türünde değişken kabul eden ve T döndüren fonksiyon
    return name;
}
let newPerson = person<string>("Doğukan");
console.log(newPerson);

class PersonGeneric <TPerson> implements IPersonGeneric<TPerson> {
    constructor() {
        
    }
    Person (number:TPerson):TPerson{
        return number;
    }
    textField(text:TPerson){
        return text;
    }
}
interface IPersonGeneric <TPersonGeneric>{
    textField (text:TPersonGeneric):TPersonGeneric;
}

let User = new PersonGeneric<number>(); // GÖnderdiğimiz tip number türünde
console.log(User.Person(5));
let user2 = new PersonGeneric<string>(); //String türünde veri 
console.log(user2.Person("Typescript Generic Completed"));
let user3 = new PersonGeneric<string>();
console.log(user3.textField("Textfield is completed"));