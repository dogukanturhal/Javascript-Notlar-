const hesapla = (sayilar) => {
    let total = 0;
    sayilar.forEach(item => {
        total += item;
    });
    return total;
}
const ortalama = (sayilar) => {
    return hesapla(sayilar) / sayilar.length;
}
let def = () => {console.log("Default export")}; 
const PI = 3.14;
export {hesapla,ortalama,PI};
export default def; // Süslü parantez kullanılmaz
