Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

## Understand the Problem
- Input : user determined integer greater than 0
- Output : 
  - sum of all numbers between 1 and the input
  - product of all numbers between 1 and the input
- Explicit Requirements : 
  - user input must be an integer
  - user input must be greater than 0
  - 1 and the input are included in the sum calculation
  - 1 and the input are included in the product calculation
  - ...
- Implicit Requirements :
  - all numbers between 1 and the input are real whole numbers
  - ...
  - ...
- Other Rules :
  - ...
  - ...
  - ...

## Examples / Test Cases
- // Please enter an integer greater than 0: 5
  // Enter "s" to compute the sum, or "p" to compute the product. s
  //
  // The sum of the integers between 1 and 5 is 15.
- // Please enter an integer greater than 0: 6
  // Enter "s" to compute the sum, or "p" to compute the product. p
  //
  // The product of the integers between 1 and 6 is 720.

## Data Structure
- Input : string (readline)
- Output : number
- Other :
  - ...
	- ...

## Algorithm
1. ask the user to enter an integer greater than 0
2. validate their input
3. store their input in a 'userInput' variable
4. declare a 'sum' variable
5. declare a 'product' variable
6. declare a 'counter' variable set to 1
7. start a loop
  1. set 'sum' equal to the sum of 'sum' and 'counter'
  2. set 'product' equal to the product of 'product' and 'counter'
  3. increment counter by 1
  4. end the loop when counter is greater than 'userInput'
8. ask the user if they want to determine the sum or the product
9. validate their input
10. store their answer in a 'userResponse' variable
10. if 'userResponse' is sum, display the 'sum'
11. if 'userResponse' is product, display the 'product'


## Code
` ... `