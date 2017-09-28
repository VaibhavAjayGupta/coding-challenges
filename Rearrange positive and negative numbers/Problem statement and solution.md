<Html>
<body>
<b>
Problem statement
</b> </br>
Rearrange positive and negative numbers in O(n) time and O(1) extra space
An array contains both positive and negative numbers in random order. 
Rearrange the array elements so that positive and negative numbers are placed alternatively.
Number of positive and negative numbers need not be equal. 
If there are more positive numbers they appear at the end of the array. 
If there are more negative numbers, they too appear in the end of the array.

For example, if the input array is [-1, 2, -3, 4, 5, 6, -7, 8, 9], then the output should be [9, -7, 8, -3, 5, -1, 2, 4, 6]

<b>Solution</b>

1.Move all the positive integers to the left of array and negative integers to the right of array.
	-Read array with 2 pointers positive number and negative number.
 	-Set positive number pointer to zero and negative number pointer to length of array -1.
	-Positive pointer represents the index of negative number in left side of array and negative pointer represents the index of positive number in right side of array.
	-increment positive counter till it represent the negative number.
	-Decrement the negative counter till it represents the positive number.
	-Swap the value in both pointers and repeat the process again till array is complete.
2. Replace every second element on the left side of array that contains the positive number with the element on the right side of array.

</body>  
</Html>
