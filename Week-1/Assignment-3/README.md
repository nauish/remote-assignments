# Assignment 3: Javascript Basics

## How I Approached the Problems

### countAandB(input)

I initialized a variable abCount that store a 0 initially, and another constant to store the criteria, in case we need to adjust it in the future, for example uppercase letters.

I then create a loop that will add 1 to the abCount whenever the an item in the argument array are in the criteria until it reaches the end of the argument array.

Finally I return the value of abCount.

### toNumber(input) and toNumberObj(input)

I originally created a match object to map the letters to numbers. Then I create a loop that adds the value of letters found in the object and push it to an empty array.

I was not satisfied with the vorbosity of my previous attempt. so I also tried using ASCII and forEach() method in the toNumberAscii function to get the same result. This solution is much more concise but require looking up the ASCII table.

## Instructions Given

> You will learn the basic skill of javascript next week, but it’s a good time to try to overcome
> some simple problems on your own first. Your job is to complete the following two functions.
>
> 1.  countAandB: count how many ‘a’ and ‘b’ letters are in the given input and return the
>     total number.
> 2.  toNumber: convert English letters to numbers, let ‘a’ to be 1, ‘b’ to be 2, and so on.
