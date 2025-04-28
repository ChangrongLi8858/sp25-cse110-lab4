# part 2

##  1.^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
3

##  2.^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
150

##  3.^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
150

##  4.^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
[50, 100, 150]                         
Each result is pushed into the discounted array during  for loop.

##  5.^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
ReferenceError: i is not defined                                       
'i' is declared with 'let' inside the for loop, so that it's unaccessible outside the block

##  6.^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
ReferenceError: discountedPrice is not defined                         
Similar with question 5, 'let discountedPrice' is declared inside the loop block, it cannot be accessible outside the block

##  7.^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
150                         
Although finalPrice is declared with let, it is within the function scope but not the for loop, so it can still be accessible. Also, at the end of the loop, its value is 150

##  8.^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^
[50, 100, 150]                         
Similar with Q4, each result is pushed into the discounted array during  for loop.

##  9.^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
有一个错误，因为使用let而不是var来声明循环，当循环结束时，i不再是可访问的。


##  10.^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
3                                                  
'length' is declared with 'const' within a function block, is accessible, and has an array length of 3.

##  11.^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
[50, 100, 150]
Similar with Q8, the contents of array are updated in the loop, then returned


#  Data type - 12. Given the above Object, write the notation for:  (These should be in your part2.md)

##  Accessing the value of the name property in the student object
student.name

##  Accessing the value of the Grad Year property in the student object
student["Grad Year"]

##  Calling the function for the greeting property in the student object
student.greeting()

##  Accessing the name property of the object in the Favorite Teacher property in student
student["Favorite Teacher"].name

##  Access index zero in the array of the courseLoad property of the student object
student.courseLoad[0]


# Basic Operators & Type Conversion

##  Arithmetic
1. '3' + 2                          
   32                         
' 'means string. So when it add with another variavle, the other variable will be turned to string then add together                         
                         
2. '3' - 2                          
   1                         
'-' can only be used for numerical operations. string '3' will be turned to the number 3, then minus 2       
                         
3. 3 + null                          
   3                         
In the numerical environment, null = 0                         
                         
4. '3' + null                         
   3null                         
There is a string in addition, so that both segments will be connected as strings                         
                         
5. true + 3 =                         
   4                         
In the numerical environment, true = 1                         
                         
6. false + null =                         
   0                         
In the numerical environment, null = 0 and false = 0                         
                         
7. '3' + undefined =                         
   3undefined                         
Convert 'undefined' to the string 'undefined', then connect                         
                         
8. '3' - undefined =                         
    NaN                         
'-'->numerical, 3=3, undefined->NaN.Any number will result in NaN when operated with NaN              
                         
## Comparison
1. '2' > 1                          
   true                         
There is a number, so convert the string '"2"' to the number 2; 2 > 1                         
                         
1. '2' < '12'                           
   flase                         
Both sides are strings. Compare them in lexicographical order starting from the first character, and 2>1                         

1. 2 == '2'                             
   true                         
'==' performs type conversion. The string '"2"' is converted to the number 2, and then the equality is compared                         

4. 2 === '2'                            
   false                         
'===' do not performs type conversion. Different types directly return false                         

5. true == 2                            
   false                         
true->1, 1 is not equal to 2                         
                         
6. true === Boolean(2)                          
   true                         
Both are true in boolean                         

## Explain the difference between the == and === operators.
'==' performs type coercion before comparison.                          
'===' is strictly equal and does not perform type conversion. only return true when the types and values are both the same

##  Loops - 16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)
As part2-question16.js shows. The program prints:                         
21                         
45                         
5                         
2                         

##  Functions - 17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
reuslt: [2, 4, 6]                         
Process:            
1. call modifyArray([1,2,3], doSomething)
2. newArr = []
3. for loop, until 0 < array.length(3) does not hold
   1. if i<3
   2. Take out array[i]
   3. call doSomething(i) and return
   4. Push in newArr
   5. i++
4. return newArr


## setInterval(), setTimeout(), clearTimeout() - 18.The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  (This should be a JS file - part2-question18.js)
As shown in part2-question18.js

##  What is the output of the above code? (This should be in your part2.md)
1                             
4                             
3                             
2                             
