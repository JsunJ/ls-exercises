In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

## Understand the Problem
- Input : year greater than 0
- Output : true of false
- Explicit Requirements : 
    - gregorian
	      - leap year must be evenly divisible by 4
	      - leap year must not be evenly divisible by 4 and 100 unless also evenly divisible by 400
    - julian
        - leap year must be evenly divisible by 4
	  - year input must be greater than 0
	  - if year is less than 1752 is follows the julian rules
	  - if year is 1752 or greater it follows the gregorian rules
- Implicit Requirements :
	  - ...
	  - ...
	  - ...
- Other Rules :
	  - ...
	  - ...
	  - ...

## Examples / Test Cases
- isLeapYear(2016);      // true
- isLeapYear(2015);      // false
- isLeapYear(2100);      // false
- isLeapYear(2400);      // true
- isLeapYear(240000);    // true
- isLeapYear(240001);    // false
- isLeapYear(2000);      // true
- isLeapYear(1900);      // false
- isLeapYear(1752);      // true
- isLeapYear(1700);      // true
- isLeapYear(1);         // false
- isLeapYear(100);       // true
- isLeapYear(400);       // true

## Data Structure
- Input : number
- Output : boolean
- Other :
    - ...
    - ...

## Algorithm
1. define a function 'isLeapYear' that has one parameter 'year'
    1. check if 'year' is greater than or equal to 1752
        1. check if 'year' is evenly divisible by 4
            1. check if 'year' is evenly divisible by 100
                1. return true if not
                2. check if 'year' is evenly divisible by 400
                    1. return true if so
                    2. return false if not
        2. return false
    2. check if 'year' is less than 1752
        1. check if 'year' is evenly divisible by 4
            1. return true if so
            2. return false if not
3. ...
4. ...
5. ...

## Code
` ... `