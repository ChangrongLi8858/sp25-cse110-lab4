## 1.Some JavaScript developers believe that most of the issues with JavaScript stem from its asynchronous nature, its loose typing, and the web platform it runs on. For each of the three reasons listed, explain in your own words why a developer might believe that it is a pain point.
1. asynchronous nature
   It makes debugging and reasoning about execution order difficult because there may be misalignment instead of the traditional linear flow
2. loose typing
   It is easy to cause subtle type errors
3. web platform
   Compatibility differences between browsers

## 2.Related to the first question, why do you believe that the developer(s) who created JavaScript made it loosely typed? Why do you think they added asynchronous features?
Probably it was not used as a complex tool at the beginning, and in order to lower the learning threshold.                             
In order to allow the browser to continue to respond to user operations while executing scripts, multiple tasks are executed simultaneously.

## 3.What are the key differences between a compiled language and an interpreted one? Which one is JavaScript? What are the benefits & drawbacks of JavaScript being made that way?
Compiled languages ​​first translate source code into machine code, which is fast at runtime, but difficult to debug and cross-platform.                            
Interpreted languages ​​interpret and execute line by line, which is more flexible, but runs relatively slowly.                            
                            
JavaScript is interpreted                                          
benefits: can run directly on various operating systems and devices                            
drawbacks: performance is not as good as pure compiled languages.                            
## 4.The professor believes that, though sometimes misused, JavaScript frameworks are incredibly powerful tools that can help teams work more efficiently and effectively. Given that, why do you believe he is focusing more on vanilla JavaScript for this course? What are the benefits of mastering vanilla JS first? What are the drawbacks of not learning a framework?
First understand the basic principles and concepts, so that when you encounter problems in the framework, you can know what the underlying layer is doing and why such problems occur. In this way, when you encounter framework bugs or performance problems, you can locate and fix them faster.                                          
drawback: It will be more difficult when you first get started

## 5.Explain, in your own words, how you think this lab relates to your project. How might you be able to use this information in your own project?
These contents are all used in the project, including flowcharts, pull & push, etc. In group cooperation, it will be extremely difficult without these skills.