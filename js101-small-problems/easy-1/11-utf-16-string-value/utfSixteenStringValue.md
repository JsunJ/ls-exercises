Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

## Understand the Problem
- Input : string
- Output : utf-16 string value of input
- Explicit Requirements : 
	  - ...
	  - ...
	  - ...
	  - ...
	  - ...
- Implicit Requirements :
	  - the input must be a string
	  - ...
	  - ...
- Other Rules :
	  - ...
	  - ...
	  - ...

## Examples / Test Cases
- utf16Value('Four score');         // 984
- utf16Value('Launch School');      // 1251
- utf16Value('a');                  // 97
- utf16Value('');                   // 0
- 
- // The next three lines demonstrate that the code
- // works with non-ASCII characters from the UTF-16
- // character set.
- const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
- utf16Value(OMEGA);                  // 937
- utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

## Data Structure
- Input : string
- Output : number
- Other :
	  - ...
		- ...

## Algorithm
1. define a function named 'utf16Value' with one parameter 'string'
    1. declare a variable named 'characterValuesSum' set to 0
    2. start a loop to iterate over every character in the 'string' argument passed in
        1. determine the utf-16 value of the current character
        2. add the value to 'characterValuesSum'
        3. end the loop after iterating over the last character in the 'string'
    3. return the value of 'characterValueSum'
3. ...
4. ...
5. ...

## Code
` ... `