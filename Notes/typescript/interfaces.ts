/**
 * Spagetti Code dediğimiz olaydan kurtulmamızı sağlar ayrıca clean code yapısını kurmamızda yardımcı olur
 * İmplemente edilmesini istedğimiz yan eklentileri oluşturulmasını sağlar
 * İçerisinde tanımlanan metotlar zorunlu olarak bağlandığı bölgede de kullanılmalıdır.
 */

interface ICustomer {
    customerMoney(name:string,surName:string,money:number);
}

class PersonInterface implements ICustomer {
    money:number = 14
    constructor(private _name:string,private _surName : string) {
        
    }
    
    public set personName(v : string) {
        this._name = v;
    }
    
    public get personName() : string {
        return this._name;
    }
    
    public set personSurname(v : string) {
        this._surName = v;
    }
    
    public get personSurname() : string {
        return this._surName;
    }
    customerMoney(){
        console.log(this._name+" "+this._surName+" "+this.money);
    }
}
let item = new PersonInterface("Doğukan","Turhal");
item.customerMoney();