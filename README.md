# algo-data-notes

A simple repo where I can store my notes on algorithms, data structures, bigO notation and examples

## Big O Notation

### Why is big O notation important?

- There are so many solutions for solving an algorithm, how do we know which one is the best? This is where Big O comes in.
- Take for example given the problem "write a function that accepts a string input and returns a reversed copy" you could use a variety of solutions for this, we would we use Big O notation to understand which is the best
- Keep in mind that the way Big O ranks how well a solution performs is not as straight forwrd as "worst - best" its more of a numeric approach.
- You may ask, why worry about the best solution if my code works? If it works, it works.
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

### So what exactly is Big O?

- Think of it as fuzzy counting, it allows us to talk in a formal manner about how the runtime of an algorithm grows as the inputs grow.

  - we only care about the trends
  - we are also talking about the worst case scenario when it comes to a solution

- We say that an algorithm is O(f(n)) if the number of simple operations the computer has to perform is eventually less than a constant times f(n), as n increases. f = function & n = input
- if we take our previous examples
  - Example two always has 3 operations, its constant. So it would be O(1)

![solutionTwo](./images/addUpToB.png)

- If we look at example one
  - The number of operations is bounded by a multiple of n. So it would be O(n)

![solutionOne](./images/addUpTo.png)

- Now if we look at the example of this function we notice that O(n) operation for the first for loop has another O(n) operation inside of it as another for loop so it would be O(n2) <=== squared. The algo grows roughly at the rate of n squared

![printAll](./images/printAllPairs.png)

### Rules for Big O

- Constants dont matter
  - if we have something like O(2n) this becomes O(n). If we have O(500) this becomes (1). O(13n2) becomes O(n2) <=== squared
- Smaller terms dont matter
  - If we have something like O(n + 10) this becomes O(n)
  - If we have O(n2 + 5n + 8) this becomes O(n2). Look at the big picture if n = 1000; 1000 squared is 1 mil, but 5\*1000 + 8 is 5008. The difference between the two is so small there is no point in worrying about the 5n + 8, its meaningless.
- Arithmetic operations are constant
- Variable assignment is constant
- Accesing elements in an array or object is constant
- in a loop the compelxity is the length of the loop times the complexity of whatever happens inside the loop
