/*
 Write a function that takes in an array of numbers and determines whether those numbers are in order
 ordered( [1, 2, 3, 7, 12] ); // true
 ordered( [4, 9, 42, 22, 56] ); // false
*/

var isOrdered = [1, 2, 3, 7, 12];
var notOrdered = [4, 9, 42, 22, 56];

var ordered = function (array){
	var isOrdered = true;
	for (var i = 0; i < array.length-1; i++ ){
	  if (array[i] > array[i + 1] ){
	  	isOrdered = false;
	  	break;
	  }
	}
	return isOrdered;
};

ordered(isOrdered);
//ordered(notOrdered);
