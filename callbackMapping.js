var words = ["ground", "control", "to", "major", "tom"];

function myMap(list, cb) {
  var output = [];
  for (var i = 0; i < list.length; i++) {
    var result = cb(list[i], i, list);
    output.push(result);
  }
  console.log(output);
}

myMap(words, function(word) {
  return word.length;
});

myMap(words, function(word) {
  return word.toUpperCase();
});

myMap(words, function(word) {
  return word.split('').reverse().join('');
});