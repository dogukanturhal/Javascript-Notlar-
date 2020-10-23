/*
    Map tıpkı Obje gibi bir adet key ve değer tutar 
    Set ise içerisinde bulunan aynı değerleri elimine eder (nümerik ve string değerler farklıdır)
*/

let map = new Map();
map.set("Name","Doğukan"); // String Key
map.set(2,"Değer"); // Numerik Key
map.set("Surname","Turhal");

console.log(map.size); // Boyutunu Gösterir
console.log(map.has("Name")); // Varsa True yoksa False Gönderir
map.delete(2);
for (const iterator of map.keys()) {
    console.log(iterator);
}
console.log(map.size);
console.log(map.get("Name"));
for (const iterator of map.values()) {
    console.log(iterator);
}
for (let [keys,values] of map) {
    console.log('${keys}-${values}');
}

for (const iterator of map) {
    console.log(iterator);
}
let set = new Set([1,1,1,2,5,5,"5",6]);
for (const iterator of set) {
    console.log(iterator);
}
set.add(99);
for (const iterator of set) {
    console.log(iterator);
}
console.log(set.size);
map.clear();