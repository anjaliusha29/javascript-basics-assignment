/* Write a program to build a `Pyramid of stars` of given height */




/*const buildPyramid = (num) => {
    
    let stars = '';
    let size=num;
    for (let i = 1; i <= size; i++) {
      for (let k = 1; (k <= size - i) ; k++) {
        stars += ' ';
      }
      for (let j = 1; j <= i; j++) {
        stars += '* ';
      }
      stars = stars + '\n';
    }
    console.log(stars);
    return stars;

};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *
*/

//buildPyramid(6);


function buildPyramid(n) {
  // create a variable outside of the for loop
  let pyramid = '';
  for (var i = 1; i <= n; i++) {
    var output = ' '.repeat(n - i) + '* '.repeat(i) + ' '.repeat(n - i);
    console.log(output);
    //update outer variable
    pyramid += `\n ${output}`;
  }
  // return it after the for loop is finished
  return pyramid;
}

console.log(buildPyramid(6))


module.exports = buildPyramid;


