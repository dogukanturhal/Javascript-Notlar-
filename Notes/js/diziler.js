var arr = []; // Bir dizi olduğunu tanımlama
arr.push("Name"); //Değer Eklendi
delete arr[0]; //0. indisdeki değeri sil
var arrNew = [1,2,5,6,99,88,47,56,52,544];
arrNew.splice(1,3, 87,96); //1 ve 2. indis değişti
arrNew.splice(3,6); //3 ve 6 arasındaki değerler silindi
document.write(arrNew.length-1); // Dizinin son elemanına ulaşmak
arrNew.pop(); // Baştan eleman Çıkarmak
arrNew.shift(); //Sondan Eleman Çıkarmak
arrNew.reverse(); //Diziyi Tersine Çeviri
var concatArr = arr.concat(arrNew); //İki diziyi birleştir
arrNew.sort((a,b) => {return a-b}); // Küçükten Büyüğe Sıralama
arrNew.sort((a,b) => {return b-a}); // Büyükten Küçüğe Sıralama
arrNew.indexOf(544); //Varsa indeksini gösterir yoksa -1 döndürür
