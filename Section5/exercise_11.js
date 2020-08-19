var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 },
];

function findWhere(array, criteria) {
  var key = Object.keys(criteria)[0];
  return array.find(function (element) {
    return element[key] === criteria[key];
  });
}

console.log(findWhere(ladders, { height: 25 }));
