<!-- Write a program that will ask for user's name. The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user. -->


## Understand the Problem
- Input : user prompt (name)
- Output : greeting (string)
- Explicit Requirements :
	- if input does not end with an exclamation point, simple greeting
  - if input does end with an exclamation point, output greeting is uppercase
- Implicit Requirements :
	- input is a string
  - output is a string

## Examples / Test Cases
```
What is your name? Bob
Hello Bob.
```
```
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
```

## Data Structure
- Input : string (readline)
- Output : string

## Algorithm
1. declare a variable named "name" and initialize its value to the return value of a user prompt
2. if the value of `name` ends in '!', convert `name` to uppercase, remove the '!', and log "HELLO `name`. WHY ARE WE SCREAMING?" to the console.
3. otherwise, log "Hello `name`." to the console.