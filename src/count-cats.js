const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

const cats = [
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2],
];



function countCats(array) {
  const flatArr = array.flat();
  let num = 0;

  flatArr.forEach((item) => {
    if (item === '^^') {
      num++;
    }
  });

  return num;
}

console.log(countCats(cats));

module.exports = {
  countCats,
};
