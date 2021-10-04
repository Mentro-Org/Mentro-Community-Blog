---- 
  title:  "Insertion Sort"
  description:  "Insertion sort is a simple sorting technique. Here in this post, first we will see the algorithm, then we will see an example of its working, we will also have a look on its implementation in C++ language, then in the last we will discuss its other characteristics."
  category: dsa
  image: /assets/images/categories/algorithm.jpg
  keywords: # Keywords your want to ad for SEO
    - Mentor 
    - Mentro
    - Mentorship
  author: TD-17
  permalink: /dsa/:title/
  tags: 
    - sorting algorithm
    - dsa
----

## Insertion Sort
```
Insertion sort is a simple sorting algorithm. Here, the list of elements is virtually divided into sorted and unsorted parts. Element from unsorted side is taken and placed in the appropriate position in sorted side of the list.
```

## Algorithm
```
1. Assume the first element to be already sorted.
2. Pick the next element from unsorted array and compare it with the elements from sorted array.
3. Shift the greater elements towards the right and insert the picked element in the appropriate position in sorted array.
4. Repeat the process until the array is completely sorted.
```

## Working of Insertion sort
```
Let's take an example of unsorted array:
Array = {12, 32, 29, 9, 34, 21, 46, 50}

//We will see sorting in ascending order.

//First two values will be compared.
//They are already in sorted order, so the array will remain same.
Array = {12, 32, 29, 9, 34, 21, 46, 50}

//For now, 12 is in sorted array. 29 will be compared to 32. 
//29 is smaller than 32. So, they will be swaped.
Array = {12, 29, 32, 9, 34, 21, 46, 50}

//Now 12 and 29 are in sorted array. Now 32 will be compared to 9.
//32 is greater than 9, they will be swaped.
Array = {12, 29, 9, 32, 34, 21, 46, 50}

//29 and 9 are unsorted, so they will be swaped.
Array = {12, 9, 29, 32, 34, 21, 46, 50}

//Again, 12 is greater than 9. So we will swap them again.
Array = {9, 12, 29, 32, 34, 21, 46, 50}

//Now we have 9, 12 and 29 in sorted array. This process will be continued until all the elements get sorted.
```

## Implementation of Insertion sort in C++.
```
#include <iostream>
using namespace std;
 
void insertionSort(int arr[], int n)
{
  int i, j, value;
  for (i = 1; i < n; i++)
  {
    value = arr[i];
    j = i - 1;
 
    //Shifting elements of sorted array, which are greater than value, towards right.
    while (j >= 0 && arr[j] > value)
    {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = value;
  }
    
  //Printing sorted array. 
  for (i = 0; i < n; i++)
    cout << arr[i] << " ";
}
 
int main()
{
	int n;
	
	//'n' is the number of elements in an array.
	cin >> n;
	
  int arr[n];
    
  //Taking elements in the array 'arr'.
  for(int i = 0; i < n; i++)
  {
    cin >> arr[i];
	}
     
  //Calling insertionSort function.
  insertionSort(arr, n);
 
  return 0;
}
```






