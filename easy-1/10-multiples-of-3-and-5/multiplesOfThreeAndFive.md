Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

## Understand the Problem
- Input : number
- Output : sum of all numbers between 1 and the input which are multiples of 3 or multiples of 5
- Explicit Requirements : 
	  - the input is an integer greater than 1
	  - compute the sum of all numbers between 1 and the input
	  - only compute numbers in the above range which are multiples of 3 or 5
	  - ...
	  - ...
- Implicit Requirements :
	  - ...
	  - ...
	  - ...
- Other Rules :
	  - ...
	  - ...
	  - ...

## Examples / Test Cases
- multisum(3); // 3
- multisum(5); // 8
- multisum(10); // 33
- multisum(1000); // 234168
- ...
- ...
- ...

## Data Structure
- Input : number
- Output : number
- Other :
	  - ...
	  - ...

## Algorithm
1. define a function named 'multisum' with one parameter 'number'
    1. declare a 'sumOfMultiples' variable set to 0
    2. declare a 'counter' variable set to 1 as the starting point to iterate from
    3. start a loop to iterate through all numbers between 'counter', inclusive, and 'number', inclusive
        1. determine if 'counter' is evenly divisible by 3 or evenly divisible by 5
            1. add this number to 'sumOfMultiples' if so
            2. do nothing if not
        2. increment 'counter' by 1
        3. end the loop when 'counter' is greater than 'number'
    4. return 'sumOfMultiples'
3. ...
4. ...
5. ...

## Code
` ... `