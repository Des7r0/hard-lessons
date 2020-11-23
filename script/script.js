let num = 266219; 
let numToStr = num.toString(); // преобразовали число в строку
let numSplit = numToStr.split(''); // разбили строку на массив
const reducer = (accumulator, currentValue) => accumulator * currentValue; // применили функцию reducer
console.log(numSplit.reduce(reducer));
let result = 1296;
result **= 3;
console.log(result);
let resToStr = result.toString();
alert(resToStr.substr(0,2));
