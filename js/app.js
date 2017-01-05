console.log(findSum(1,2,3)); // Calls the function calculateArea(radius) wthin a console statement
console.log(findSum(1,2,3,4,5,6,7,8,9,10));



function findSum(){ //Takes no arguments
	var sum=0; //Set sum to zero
	for (i=0;i<arguments.length;i++){ //Loop through the arguments array of the function
		sum+=arguments[i]; //Add the argument to sum
	}
	return sum;
}