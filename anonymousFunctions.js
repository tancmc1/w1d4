var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
//compute for square root
 //Math.sqrt(input.x + input.y)
var result = input.map(function(value) {
  return Math.sqrt(value.x * value.x + value.y * value.y)
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);








