Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

## Understand the Problem
- Input : single integer
- Output : true or false
- Explicit Requirements : 
  - integer input can be positive, negative or zero
  - integer input is a valid integer
  - output is true if the input's absolute value is odd
- Implicit Requirements :
  - output is false if the input's absolute value is even
- Other Rules :

## Examples / Test Cases
- console.log(isOdd(2)); // => false
- console.log(isOdd(5)); // => true
- console.log(isOdd(-17)); // => true
- console.log(isOdd(-8)); // => false
- console.log(isOdd(0)); // => false
- console.log(isOdd(7)); // => true

## Data Structure
- input : number
- output : boolean

## Algorithm
1. declare a function named 'isOdd' with a single parameter named 'number'
2. inside the function, determine the absolute value of the number
3. if the absolute value is odd, return true
4. if the absolute value is even, return false
5. ...

## Code
` ... `