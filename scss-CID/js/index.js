// 05/12/2023

function arraySearch(arr, searchItem) {
    // first step -loop through the array 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchItem) {
            // return the index of the position of the element
            return i;
        }
    }

    return "Not Found"
}

// linear search - this is what the above does, goes through each element in order.

// binary search - the example below, needs to sort the array first , the it breaks it down to two arrays 1 small and 1 big and then goes through the small array first.

// [1, 5, 6, 7, 11]  example array, sorted array
// [1, 5] [6, 7, 11]  the binary search breaks it down do as seen here 


console.log(arraySearch([1, 7, 11, 5, 6], 9));


// Look up - search algorithm
//sorting algorithm

function addNewItem(arr, item) {
    // add a new item
    arr.push(item)
    return arr;

}

console.log(addNewItem(['bus', 'train', 'plane'], "car"));

// 09/12/2023 
// Problem 1 - solution 1

function helloWorld(n) {

    for (let i = 0; i < n; i++) {
      console.log('Hello World');
    }
}


helloWorld(5);

// Problem 2 - solution 1
const number =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumbers(number){
    const evenNums =  [];
    for (let i= 0; i < number.length; i++){
        if(number[i] %2===0){
            evenNums.push(number[i]);
        }
    }
    console.log(evenNums);
}

evenNumbers(number);

// solution 2
let arrayofNumbers = [1,2,3,4,5,6,7,8,9,10];

function filterEvenNumber(arrayofNumbers) {
   const evenNumbers = arrayofNumbers.filter(num => num%2 ===0);
   console.log(evenNumbers) 
}
 filterEvenNumber(arrayofNumbers)

// Problem 3 - solution 1 

function sumOfEvenNums(number){
    const evenNums =  [];
    let sum =0;
    for (let i= 0; i < number.length; i++){
        if(number[i] %2===0){
            evenNums.push(number[i]);
        }
    }
    for (let j= 0; j < evenNums.length; j++){
        sum += evenNums[j];
    }
    console.log(sum);
    
}

sumOfEvenNums(number);

// Problem 4 - solution 1 

function numsReverse(number) {
   console.log(number.reverse());
}

numsReverse(number);

