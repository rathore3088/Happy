// // While and do while loop
// let index=0
// while (index<=10) {
//     console.log(index);
//     // console.log(`value of index ${index}`);
//     index = index + 2   
// }

let myArray =['Rajeev','rathore','lokesh']
let arr=0
while (arr<myArray.length-1) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}

// do while loop
let score = 11
do{
    console.log(`score is ${score}`);
    score++
} while (score<=10) ;