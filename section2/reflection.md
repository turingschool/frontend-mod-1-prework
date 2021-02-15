## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
  - I think i usually wait too long to ask questions. I am trying to be better about it, but I know that most of the time if I walk away from a problem and come back to it with fresh eyes I can figure it out. The issue now seems to be when to walk away from it in the first place. I know I need to be better about asking questions when I have spent a sufficient amount of time on a problem and don't seem to be getting anywhere.

2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
   - It is uncomfortable not knowing how to do something right off the bat, but it forced me to really think about how I accomplished the same tasks before. I had to look back the first time to make sure I was typing everything into my terminal correctly. After that, I was able to do it with relative ease. It is beneficial to take the support away to some extent because it forces me to do things that I know, but am not confident in that knowledge. This really just reinforces the knowledge in ways that reading it in the directions over and over does not.

3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
  - A conditional statement is essentially something you use to allow your code to determine which path to take next.
     - In real life a conditional for me might look like this:
     `if (coffeeMade === yes) {
        drink ();
       }`
     - For work, I work in an electronic medical record system. So a conditional that is used in that EMR :
     ` if (systolicBloodPressure >= 160) {
         alert();
     }`
4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
   - When adding multiple conditions, you use the if/else if/else syntax. This allows you to add multiple outcomes for multiple conditions. EX:
   ` if (systolicBloodPressure >= 160){
      console.log('Elevated blood pressure. Alert provider.');
   } else if (diastolicBloodPressure >=100) {
     console.log('Elevated blood pressure. Alert provider');
   }`
   - The system is checking to see if condition 1 is met. If the patient has an elevated systolic blood pressure over 160 but a normal diastolic, the system will alert the physician. If the patients systolic is normal then the system moves on and assesses the second condition. If the patient's systolic BP is normal but their diastolic is above 100, then it will alert the provider. Basically, a system checks if the first condition is met and if it is it runs that code block. If it is not, it moves to the next condition and ignores the first code block. If the second condition is met, the second code block runs.

5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
  - If I want to check that 2 conditions are met or that 1 of 2 are met, I can use logic operators. If i use the `&&` AND operator, I can make sure that both conditions are met before I run a block of code. If I only need one condition met then I can use the `||` OR operator.

6. What questions do you still have about `if` statements and/or functions?
  - I still feel like I don't fully grasp exactly how the logic operators are used within a conditional. I'm not fully certain that the code I used in the if-statements document was correct. The code ran, but it seemed weird to me. Maybe it is just because it is a new topic. I'll be doing more practice with those moving forward. 
