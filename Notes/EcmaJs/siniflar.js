/*
    * Classlar aslında objelerin prototiplenmesinden meydana gelmektedir
    * Typescript OOP yani Nesne Yönelimli Programlamaya daha uygun bir haldedir
*/
import date from "./modules/tarih.js";
class animal {
    constructor(name) {
        this.name = name;
    }
    intro(){
        console.log(this.name);
    }
}
let wolf = new animal("Wolf");
wolf.intro();

// isimsiz class

const circle = class {
    
    constructor(rad) {
        this.rad = rad;
        this.PI = 3.14; 
    }
    area(){
        return console.log(this.rad * this.PI);
    }
}
new circle(7).area();

//Inheritance

class time extends date{
    hour(){
        return this.currentDate.getHours();
    }
    seconds(){
        return this.currentDate.getSeconds();
    }
    minutes(){
        return this.currentDate.getMinutes();
    }
}


let test = new Date();
setInterval(() => {
    let now = new time();
    console.log(now.hour()+"/"+now.minutes()+"/"+now.seconds()+"=>"+now.day()+"."+now.month()+"."+now.year()),1000
})
