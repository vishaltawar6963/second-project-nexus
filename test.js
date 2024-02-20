// reverse an array 

const arr = [1,2,3,4,5]
const arrnew = []

for (let i = arr.length-1; i >= 0; i--) {

arrnew.push(arr[i])
    
}
// console.log(arrnew);



// find unique no 
const findUnique = [1, 2, 2, 3, 4, 4, 5]
const sortedArr = []

for (let i = 0; i < findUnique.length; i++) {

    let available = sortedArr.find(no => findUnique[i] === no)

    if (!available) {
        sortedArr.push(findUnique[i])
    }
}
console.log("sorted arr : ",sortedArr);

// find key by its value 

const obj =  {a: 10, b: 20, c: 'hello', d: 30}


const allKeys = Object.keys(obj)

console.log(allKeys);

const keyFound = allKeys.find(k => obj[k] === 30 )

// console.log(keyFound);


// calculate the sum of all the numaric values in obj 

const objNum = {a: 10, b: 20, c: 'hello', d: 30}
let sum = 0

for (const key in objNum) {
    console.log(typeof objNum[key]);
    if (typeof objNum[key] === "number") {
        sum += objNum[key]

        
    }
  
}
console.log(sum);

// Write a function to split an array into chunks of a given size.


function splitarr(arr , chunk) {
    


const splitedArr = []


   for (let i = 0; i < arr.length; i = i+ chunk) {

     
   }
 
    
}

splitarr([1,2,3,4,5] , 3)


