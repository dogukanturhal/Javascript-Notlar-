setTimeout('alert("Fonsiyonlar Js Çalıştı")',1000);
function getDate() {
    let date = new Date();
    document.write(date.getDate);
    document.write(".");
    document.write(date.getMonth);
    document.write(".");
    document.write(date.getFullYear);
} 

function Sum(num1,num2) {
    document.write("Result = "+ num1+num2)
}
function SumWithReturn(sum1,sum2) {
    return sum1+sum2;
}

