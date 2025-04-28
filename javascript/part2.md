# part 2

##  ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
3
After the loop ends, the value of i has been equal to prices.length, which is 3

##  ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
150
After the loop ends, the value of var discountedPrice is the result of the last iteration calculation, which is 300 * 0.5 = 150.

##  ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
150
finalPrice is declared with var and remains accessible after the loop ends, and its value is 150 calculated in the last iteration

##  ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
[50, 100, 150]
Each result is pushed into the discounted array during  for loop.

##  ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
ReferenceError: i is not defined
'i' is declared with 'let' inside the for loop, so that it's unaccessible outside the block

##  ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
ReferenceError: discountedPrice is not defined
Similar with question 5, 'let discountedPrice' is declared inside the loop block, it cannot be accessible outside the block

##  ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
150
Although finalPrice is declared with let, it is within the function scope but not the for loop, so it can still be accessible. Also, at the end of the loop, its value is 150

##  ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^
[50, 100, 150]
Similar with Q4, each result is pushed into the discounted array during  for loop.

##  ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
3
'length' is declared with 'const' within a function block, is accessible, and has an array length of 3.


##  ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
[50, 100, 150]
'discounted' is declared with 'const', but the array itself is mutable and contains three discounted prices after the loop

##  ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
[50, 100, 150]
Similar with Q8, the contents of array are updated in the loop, then returned
