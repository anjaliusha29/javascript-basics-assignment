const flatten = (input) => {
	// Write your code here

	if(!Array.isArray(input))
	{
		return null;
	}    
	let result=input.flat(Infinity);

      return result;

};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;