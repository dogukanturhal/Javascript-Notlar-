/**
 * Veri Tipleri
 */

let number:number; // Veri Tipii Belirlendi 
number = 10;

let city:string = "İstanbul"; // Veri Tipi Belirlendi
city = "Ankara";

let bool:boolean; // True False Değer

bool = true;

let arr : number[] = [1,5,9,8,6,4,55]; // Dizi Tipi Belirlendi

let arr2 : Array<number> = [7,8,9,55]; // Generic Tip 

let arr3 : [number,string] = [7,"Ankara"]; // Tuple Tanımlama

enum Colors {Black=1,Red,Blue,Green,White};

let color : Colors = Colors.Blue;

let value : any; // Herhangi bir değer kabul eder

value = "Ankara";
value = 5;
