const _ = require('lodash');
/* o lodash quando é importado é usado _ para 
representalo*/

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

const diff = _.difference(a, b);

console.log(diff);