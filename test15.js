// for of 
// ["","",""]
// [{},{},{}]

// const arr =[1,2,4,5,6]
// in the for of loop the no of value we pass is gonna to print that much value 
// const arr2 =["batman","superman","ironman","angel"]
// for (const num of arr2) {
//     console.log(arr2);
// }

const greeting = "hello world!"
for (const greet of greeting) {
    console.log(`each char is ${greet}`)
    
}

// maps

// Maps are used for holding the key value pairs
// values are unique and follow the order of the input  
const map = new Map()
map. set('IN',"India")
map. set('USA',"America")
map. set('FR',"France")
console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}
const myObject ={
    'game1':'NFS',
    'game2': 'Spiderman'
}
for (const [key, value] of object) {
    console.log(key, ':-',value);
    
}

    

  
