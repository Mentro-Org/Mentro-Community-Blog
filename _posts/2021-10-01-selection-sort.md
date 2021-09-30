---
title: "Selection Sort - A simple sorting algorithm"
description: "This blog post is about Selection Sort, a simple sorting algorithm. Here, we will talk more about selection sort, how it works, and finally look at its pseudo-code for its implementation."
keywords: 
    - Mentro
    - Selection Sort
    - Sorting Algorithm
category: dsa
layout: post
author: niyoj
avatar: "/assets/images/author/niyoj.jpg"
tags:
    - sorting algorithm
    - dsa
    - selection sort
permalink: /dsa/:title/
image: /assets/images/b1/mentor.jpg
---

Sorting algorithms are the algorithms that are used to sort any given data in a dataset in ascending or descending order. There are various sort algorithms like the bubble sort, quick sort, etc. among which one of the simpler and common types of the sort is selection sort.

## Introduction
As the name, selection sort, suggests the algorithm selects the minimum valued element repeatedly (in case of ascending order) and adds the minimum value in the beginning. Further, the steps involved for this algorithm to sort an array (here 8, 11, 9, 13, 16, 5) can be as below;

```
array = {8, 11, 9, 13, 16, 5}

//First the number of elements is found
n = 6

//Now the smallest value between 1 and n is chosen here 5 (in 6th place)
min = 5

//Now the minimum value is swapped with the first element value
array = {5, 11, 9, 13, 16, 8}

//Now the smallest value between 2 and n is chosen here 8 (in 6th place)
//Now the element in 2nd place is swapped with the minimum value element
array = {5, 8, 9, 13, 16, 11}


//Now the smallest value between 3 and n is chosen here 9 (in 3rd place)
//Since the minimum value and 3rd value is the same no swap takes place
array = {5, 8, 9, 13, 16, 11}

//Now the smallest value between 4 and n is chosen here 11 (in 6th place)
//Now the minimum value and 4th value is swapped
array = {5, 8, 9, 11, 16, 13}

//Now the smallest value between 5 and n is chosen here 13 (in 6th place)
//Now the minimum value and 5th value is swapped
array = {5, 8, 9, 11, 13, 16}

//Finally all the selection is completed and all the elements are sorted

```

## Pseudo-Code for Selection Sort
Now from the example above let's develop a Pseudo-code for this algorithm which is as follows;

```
int array[] = { 8, 11, 9, 13, 16, 5 }
int n = 6             //size of array

for (i=0; i<n-1; i++) {
       min = array[i]
			 
			 //finding the lowest value
       for (j=i; j<n; j++) {
			        if(array[j]<min) min = array[j]
			 }
			 
			 //swapping the minimum value
			 swap(min, array[i])
}
```

## Implementation of Selection Sort in C
Hence, for the C programming language we can develop the program as;
1. For swapping the values we can create a function `int swap()` which accepts two values and exchanges the value of each other. Pointer is used to pass the value by reference so, the original value also gets swapped.

```
void swap(int* x, int* y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}
```

Here, `int temp` variable is used to store the value of the variable temporarily.

2. For the implementation of the above pseudo-code for selection sort, we can declare a function `selection_sort()` that accepts the array and the number of elements in the array as the argument. Now a loop for variable `int i = 0 to n-1` is performed to select each values. And another loop for variable `int j = i to n` is conducted to get the minimum value and finally, the value of ith element is swapped with the minimum value using the above function `void swap()`.

```
void selection_sort(int num[], int n) {
    for (int i=0; i<n; i++) {
        int min = i;

        for(int j=i+1; j<n; j++) {
            if(num[j]<num[min]) min = j;
        }

        swap(&num[min], &num[i]);
    }
}
```

Finally, altogether the code in the C programming language can be written as;

```
#include <stdio.h>

void swap(int *x, int* y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

void selection_sort(int num[], int n) {
    for (int i=0; i<n; i++) {
        int min = i;

        for(int j=i+1; j<n; j++) {
            if(num[j]<num[min]) min = j;
        }

        swap(&num[min], &num[i]);
    }
}

int main(void) {
    int num[] = {15, 11, 9, 13, 16, 5};
    int n = sizeof(num)/sizeof(num[0]);

    printf("The given array is: ");
    for(int i=0; i<n; i++) printf("%d ", num[i]);

    selection_sort(num, n);

    printf("\nThe sorted array is: ");
    for(int i=0; i<n; i++) printf("%d ", num[i]);

    printf("\n");
    return 0;
}
```

#### Output: 
```
The given array is: 15 11 9 13 16 5 
The sorted array is: 5 9 11 13 15 16 
```

## Conclusion
In this way, a simple algorithm for sorting the elements in the array can be implemented and the algorithm is best to use if the number of elements is small.
