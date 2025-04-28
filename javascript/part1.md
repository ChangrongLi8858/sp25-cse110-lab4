# var declaration - AVOID USING VAR WHENEVER POSSIBLE
##  What is printed by line 9? If the code returns an error, explain why. 
values added: 20
First, let's look at the judgment within the function. Since the sixteenth line assigns "add" as true, the code in the first block is executed. It is required to output the values of 'values added:' and result. It is known from lines 5 and 7 that result is equal to the sum of num1 and num2, and line 16 further assigns that both num1 and num2 are equal to 10. So the final result is "values added: 20"

##  What is printed by line 13? If the code returns an error, explain why. 
final result: 20
After the 'if' block ends, 'result' is 20. Therefore, according to line 13, 'final result: 20' is recorded.

##  Why should you not use var? Explain why. 
Because 'var' is a function scope, not a code block scope. That is to say, variables declared within a code block will not only exist within the block but also outside the code block. This might result in the name collisions

##   What is printed by line 9? If the code returns an error, explain why.
values added: 20
As before, it is defined in the if block

##  What is printed by line 13? If the code returns an error, explain why. 
ReferenceError: `result is not defined`  
Because 'let result' only exists within the 'if' code block. Outside the code block, the variable 'result' has not been defined yet





#   const declaration

##  What is printed by line 9? If the code returns an error, explain why. ^^^^^
values added: 20
As before, it is defined in the if block

##  What is printed by line 13? If the code returns an error, explain why. 
ReferenceError: `result is not defined`  
As 'let', 'const' is also a block-level scope. Once a block is removed, it cannot be accessed


