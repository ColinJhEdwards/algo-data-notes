# algo-data-notes

A simple repo where I can store my notes on algorithms, data structures, examples and bigO notation

## Big O Notation

### Why is big O notation important?

- There are so many solutions for solving an algorithm, how do we know which one is the best? This is where Big O comes in.
- Take for example given the problem "write a function that accepts a string input and returns a reversed copy" you could use a variety of solutions for this, we would we use Big O notation to understand which is the best
- Keep in mind that the way Big O ranks how well a solution performs is not as straight forwrd as "worst - best" its more of a numeric approach.
- You may ask, why worry about the best solution if my code works?
  - Its important to have precise vocabulary to talk about how our code performs.
  - Useful for discussing trade offs between different approaches.
  - Help understand what parts of our code that could be slowing it down.

### Example

-Write a function that calculates the sum of all number from 1 up to n

-Solution One

![solutionOne](./images/addUpTo.png)

-Solution Two

![solutionTwo](./images/addUpToB.png)

- Here we have two working solutions so which one is better?
- Do we look at which is faster? Which uses less memory? Which is more readable? They are all valid concerns and it comes down to the situation.
- Idealy we would focus on speed and memory usage first.

- When testing the speed on both solutions, soluton 1 takes around 1.25 seconds to run while solution 2 takes .0001 seconds to run. A huge difference.
- The only problem is that when it comes to timing our code there is alot of problems with time in general
  - Different machines will record different times
  - The SAME machine will record different times
  - For algorithms where the solution is relatively fast for all solutions, speed measurements may not be precise enough.
- But how would we write down how effecient these solutions are in comparison?
  - Instead of measuring time, we would instead count the NUMBER of simple operations the computer has to perform.
  - This remains constant compared to measuring time.
- if we look at solution 2 we can see three operations happening.
  - 1 multiplication
  - 1 addition
  - 1 division

![solutionTwo](./images/addUpToB.png)

- If we use the same approach for solution one we will see x operations
  - since we are in a loop here the amount of operations is dependant on n.
  - within the loop we have n additions and n assignments (+=)
  - we have n additions and n assignments for incrementing i (i++)
  - 1 assignment for total variable, 1 assignment for i variable, n comparisons for i to n (i<= n)

![solutionOne](./images/addUpTo.png)

- Dont get bogged down on counting all the operations and assignments, what we are concerned about here is how our operations grow roughly in proportion with n. It is a trend. Focus on the big picture.
