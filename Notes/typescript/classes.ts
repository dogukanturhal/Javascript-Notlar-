/**
 * Sınıflar typescript sayesinde daha efektif kullanılabilir
 * Çeşitli 4.Nesil yazılım dillerinde bulunan özellikleri kullanılmasını sağlamaktadır
 * private sadece kendi sınıfı içerisinde kullanılabilir
 * protected çağırıldığı interface üzerinden de kullanılabilmeyi sağlar
 * public herkes tarafından erişilebilir.
 * Abstract Sınıflar abstract olarak tanımlanan metotları diğer sınıflarda zoraki kullandırmaktadır.
 */

class animal {
    constructor(name:string) {
        console.log("Name Of The Animal : " + name);
    }
    text(type:string):void {
        console.log("New Line");
    }
}
// Inheritance

class Person {
    // Javada ki gibi getter ve setter yapıları oluşturuldu
    
    constructor(private _name:string,
        private _lastName:string) {}
    public set personName(v : string) {
        this._name = v;
    }
    
    public get personName() : string {
        return this._name;
    }
    
    public set personSurname(v : string) {
        this._lastName = v;
    }
    
    public get personSurname() : string {
        return this._lastName;
    }
}
class Customer extends Person{
    sold(text:string):void {
        let person:string = this.personName + " "+this.personSurname;
        console.log(text+" "+person);
    }
}

abstract class asbPerson {
    constructor() {
        
    }
    abstract name(name:string):void;
}
class absClient extends asbPerson {
    constructor() {
        super();// Üstteki paramatrede ki bilgiyi almaya sağlar
    }
    name(name:string){
        console.log(name);
    }
}
let abs = new absClient();
abs.name("Doğukan");