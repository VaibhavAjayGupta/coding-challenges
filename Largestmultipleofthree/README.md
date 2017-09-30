<!Doctype>
<html>
<body>
<h1><strong><span style="font-size: 24px;">Problem Statement</span></strong></h1>

<h1><span style="font-size: 18px;">Find the largest multiple of 3 from array of digits &nbsp;(In O(n) time and O(1) space).</span></h1>

<p><span style="font-size: 18px;">Given an array of digits (contain elements from 0 to 9). Find the largest number that can be made from some or all digits of array and is divisible by 3. The same element may appear multiple times in the array, but each element in the array may only be used once.</span></p>

<p>
	<br>
</p>

<p><strong><span style="font-size: 24px;">Solution</span></strong></p>

<p><span style="font-size: 18px;">For a number to be divisible by 3. The sum of it&#39;s digit must also be multiple of 3.&nbsp;</span></p>

<p><span style="font-size: 18px;">Steps:-</span></p>

<p><span style="font-size: 18px;">1. Sort array in descending order using counting sort.</span></p>

<p><span style="font-size: 18px;">2. Find the sum of elements of an array.</span></p>

<p><span style="font-size: 18px;">3. Take remainder of sum % 3.&nbsp;</span></p>

<ul>
	<li><span style="font-size: 18px;">If remainder is 0 output the digits of an sorted array to form a number.&nbsp;</span></li>
	<li><span style="font-size: 18px;">If remainder is 1. Reverse trace the array and check for each element % 3 = 1 then delete that element. Else check for element % &nbsp;3 = 2 and delete two such elements.&nbsp;</span></li>
	<li><span style="font-size: 18px;">If remainder is 2.<span style="font-size: 18px;">Reverse trace the array and check for each element % 3 = 2 then delete that element. Else check for element % &nbsp;3 = 1 and delete two such elements.&nbsp;</span></span>
	</li>
</ul>

<p><span style="font-size: 18px;"><span style="font-size: 18px;"><strong>Input&nbsp;</strong></span></span>
</p><pre>{5, 4, 3, 1, 1} </pre>

<p><strong>Output</strong></p><pre>4311</pre>

</body
</html>
