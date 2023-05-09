// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
//input: lenght of sequence
// output: sequence of specified lenght 
// method: we use a conditinal statement to evaluate if the number is equal to two, if so we define what the outcome would be. In our else statement we tell it to look at the last number befroer the new number we just recieved in the sequence, and tell it to push the two last alues and add them together to recieve our new value.


// a) Create a test with expect statements for each of the variables provided.

describe("fibSeq", () => {
  it("returns the last two numbers added together to create a seq", ()=> {
    expect(fibSeq(fibLength1).toEqual([1, 1, 2, 3, 5, 8]))
    expect(fibSeq(fibLength2).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]))
  })

})

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
const newNum = fibLength1[fibLength1.length - 1] + (fibLength1[fibLength1.length - 2] || 0);

const fibSeq = (number) => {
  if(number===2)  {
    return [1,1]
  }
  else  {
    let sequence = fibSeq (number -1)
    sequence.push(sequence[sequence.length -1] + sequence[sequence.length - 2])
    return sequence
  }
}
console.log(fibSeq(fibLength1));


//Tried †o make this code work but needed assitance from student to fix my sequence
//   for (let i = 0; i < fibLength; i++) {
//     fibLength.push(num1);
//     nextNum = num1 + num2;
//     num1 = num2;
//     num2 = nextNum;
    
//   }
  

//   return  (
//     fibLength
//   )

// };

// console.log(sequence);





// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

//input: objects
//output: sorted numerical vals in objects
// Method: use a function that evaluates the value of the object and using .sort we tell it to sort our array into the direction we want it to and show the results

// a) Create a test with expect statements for each of the variables provided.

describe("orderedNums", () => {
  expect(orderedNumbs({studyMinutesWeek1})).toEqual([15, 15, 20,30, 30, 60, 90])
  expect(orderedNumbs({studyMinutesWeek2})).toEqual([10, 15, 20, 45, 60, 65, 100])
})



const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

const orderedNumbs = (obs) => {
  let newArr = Object.values(obs)
  let sortedArr = newArr.sort((a , b) => a - b)
    return (
      sortedArr
    )
  }


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// PseudoCode:
// Input: Array
// output: added values in arr
// method: create function that takes in the values from the defined constant and make two sets of vaariables for the other values
// Loop: using a loop we loop through the array and using conditonals we can look at the number and find the sums
//.push: use to push sum of vals into new arr

// a) Create a test with expect statements for each of the variables provided.

describe("accSum", () =>{
  it("adds values", () =>{
    expect(accSum(accountTransactions1.toEqual([100, 83, 60, 51])))
    expect(accSum(accountTransactions2.toEqual([250, -89, 100, -96])))
    expect(accSum(accountTransactions3.toEqual([])))

  })
})

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.





const accSum = (arr) => {
  let firstVal = arr[0];
  let newArray = []
  for (let i = 0; i < arr.length; i++){
    if (i == 0){
      let addedNum = firstVal
      return (
        newArray.push(addedNum)
      )
    }else{
      let secondNum= arr[i]
      let totalNum = addedNum + secondNum
      firstVal = addedNum
      return (
        newArr.push(totalNum)
      )
    }
  }
}
console.log(accSum(accountTransactions1))
console.log(accSum(accountTransactions2))
console.log(accSum(accountTransactions3))
