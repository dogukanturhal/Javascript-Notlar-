export default class date {
    constructor() {
        this.currentDate = new Date();
    }
    day(){
        this.currentDate.getDay();
    }
    month(){
        this.currentDate.getMonth();
    }
    year(){
        this.currentDate.getFullYear();
    }
}