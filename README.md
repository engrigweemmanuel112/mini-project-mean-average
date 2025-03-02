Scenario

You are working on a data science project, and five samples have been taken from a river at different locations. Each of these water samples has been tested for a particular toxin in the river. After the tests, results have been produced that show the levels of these toxins as a set of five decimal numbers, indicating the toxin levels in each area. As part of this assignment, you are expected to take these five decimal numbers and perform various calculations. The first calculation is to find the mean/average of these five numbers.

Requirements:

Produce code that will be able to take a list of five decimal numbers. Then calculate the mean or average from this list of numbers and produce the correct output as a number.

To calculate the mean:

Add all the numbers together. Then divide the total sum by the number of scores used.

Mean(Average) = Sum/ Count

Instructions

1.  Create an array of the five decimal numbers and store this in a variable.

2. Create a function that calculated the mean of the array of numbers.

    2.1 Define a named function.

    2.2 The named function must take the array as a parameter.

    2.3 The function statements in the function block must:

        2.3.1 Create a variable to contain the sum of the values and initialize this to 0.

        2.3.2 Create a for loop to iterate over each value stored in the array.

        2.3.3 The for loop must add the values of the array together, then assign the result to the sum variable.

        2.3.4 Then divide the sum by the number of values stored in the array and return the result.

3. Store the result of the function in a variable that represents the mean.

4. Use a method of the Math object to round the mean off to the nearest integer with only two decimal places. - Math.round().

5. Create a variable that stores the result of using the Math.round() method and concatenate it with a message that explains what the output is going to be.

6. Then log the message and the final result to the console.
