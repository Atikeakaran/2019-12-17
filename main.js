// i= i+1;
//i+=1;
//i++
//i=i+4;
//i+=4;
//i++++ bu çalışmaz



// function logTillTen(params) {
//     for (let i = 1; i <= 20; i++) {
//         console.log(i);
//     }
// }
// logTillTen();


// function logTill() {
//     for (let k = 20; k <= 50; k+=2) {
//         console.log(k);
//     }
// }
// logTill();

// function logTillNumber(finalNumber) {
//     for (let i = 1; i <= finalNumber; i++) {
//         console.log(i);
//     }
//     console.log("congrats!")
// }
// logTillNumber();


// function logTillPromptNumber() {
//     let firstNumber = parseInt(prompt("kaçtan itibaren"));
//     let finalNumber = parseInt(prompt("kaça kadar"));

// if (finalNumber> 50){
//     alert("lütfen 1 ile 50 arasında bir sayı seç")
// }else{
//     for (let i = firstNumber; i <= finalNumber; i++) {
//         console.log(i);
//     }
//     console.log("congrats!")
// }
// }

//---- 17-12-19 ders 2-------------------------------------------


let firstNum, finalNum;

function SetFirstNumber() {
    firstNum = parseInt(prompt("Please type your first number"));
}
function SetFinalNumber() {
    finalNum = parseInt(prompt("Please type your final number"));
}
function LogSerie(first, last) {
    for (let i = first; i <= last; i++) {
        console.log(i);
    }
    console.log("you can see me!");
    return("sum is done");
    console.log("you can not see me!");
}
LogSerie(7,8);
console.log(LogSerie(1,5));

// function sumSerie(first,last){
//     let sum =0;
//     for (let i=first; i<= last; i++){
//         sum+=i;
//     }
// return("sum is done");
// return(sum);
// console.log("you can not see me!");
// }

// sumSerie(1,3);
// console.log(sumSerie(1,3));
// console.log(sumSerie(1,5));


function sumTwoNum(first,second){
    let sum = first + second;
    //console.log("sum: "+sum); 
    return(parseInt(sum));
}
//sumTwoNum(3,2);
console.log(sumTwoNum(3,2));
alert(sumTwoNum(7,3));

// function calcFactorial(finalNumb){
//     let result = 1;
//     if(finalNumb>100){
//         return("your num can not be biger than 100!");
//     }
//     for (i=1; i<=finalNumb; i++){
//         result=result*i;
//     }
//     return(result);
// }
// //console.log("res:" + calcFactorial(300));
// console.log("res:" + calcFactorial(7));

// //  ödev 