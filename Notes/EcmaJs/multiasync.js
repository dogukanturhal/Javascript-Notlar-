/*
    * Birden fazla yapılan asenkson çağrılarda .then ile kontrolü gerçekleştirme
 */

const pro1 = Promise.resolve(1);
const pro2 = true;
const pro3 = new Promise((resolved,rejected) => {
    setTimeout(() => {
        resolved("pro3 success")
    },5000)
});
Promise.all([pro1,pro2,pro3]).then((degerler)=> {
        console.log(degerler);
    }
)