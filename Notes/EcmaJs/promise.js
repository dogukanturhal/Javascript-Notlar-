/*
 * promise yapısı asenkron çalışan bir try catch gibi düşünülebilir. 
 * then ise promise yapısında oluşturulan resolve ve reject için return değerleri alır ve işlememizi sağlar
 */

let promise = new Promise((resolve,reject) => {
    console.log("test başarılı");
    let num1 = 10;
    if (num1===1) {
        resolve("fine");
    }
    else{
        reject("error");
    }
});


promise.then(message => {
    console.log(message); // resolve çalışır
},(message) => {
    console.log(message); // reject çalışır;
})