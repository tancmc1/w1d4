var words = ["ground", "control", "to", "major", "tom"];

function map(list, cb) {
  var output = [];
  for (var i = 0; i < list.length; i++) {
    var result = cb(list[i], i, list);
    output.push(result);
  }
  console.log(output);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});