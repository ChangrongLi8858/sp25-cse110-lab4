# var declaration - AVOID USING VAR WHENEVER POSSIBLE
##  1. What is printed by line 9? If the code returns an error, explain why. 
values added: 20


##  2. What is printed by line 13? If the code returns an error, explain why. 
final result: 20          

##  3. Why should you not use var? Explain why. 
Because 'var' is a function scope, not a code block scope. That is to say, variables declared within a code block will not only exist within the block but also outside the code block. This might result in the name collisions

##   4. What is printed by line 9? If the code returns an error, explain why.
values added: 20


##  5. What is printed by line 13? If the code returns an error, explain why. 
ReferenceError: `result is not defined`                      
Because 'let result' only exists within the 'if' code block. Outside the code block, the variable 'result' has not been defined yet





#   const declaration

##  6. What is printed by line 9? If the code returns an error, explain why. ^^^^^
TypeError: Assignment to constant variable.                     
"const result =0" is defined in the fifth line; However, if this constant is assigned a value again on the seventh line, an error will occur on this line and the subsequent code will not continue to run

##  7. What is printed by line 13? If the code returns an error, explain why. 
ReferenceError: `result is not defined`                      
As 'let', 'const' is also a block-level scope. Once a block is removed, it cannot be accessed


