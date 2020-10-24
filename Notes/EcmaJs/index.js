
/*
import { hesapla,ortalama,PI } from "./modules/hesap.js"; // Oluyştuduğumuz modülden istenilen bilgiyi al
yada
import * as hesapx from "./modules/hesap.js";
yada
*/
import def, {
    hesapla as toplam,
    ortalama as ort,
    PI as pi
} from "./modules/hesap.js"
let numberArr = [5,5,6,4];
console.log(toplam(numberArr));
console.log(ort(numberArr));
console.log(pi);
def(); // default export çalıştı