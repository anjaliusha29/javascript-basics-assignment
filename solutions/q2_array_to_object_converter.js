const convert = (arr, keyField) => {
	// Write your code here

	if(!Array.isArray(arr))
	{
		return null;
	}
	const convertArrayToObject = (array, keyField) => 
		arr.reduce((obj, item) => {
			obj[item[keyField]] = item
			return obj
		}, {})
	
	const finalResult = convertArrayToObject(arr, keyField)

	return finalResult;

};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/
module.exports = convert;