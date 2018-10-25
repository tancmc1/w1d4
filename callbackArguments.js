function findWaldo(arr, found) {
  var index = arr.indexOf("Waldo");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(index);   // execute callback
    }
  }
}
function actionWhenFound(found) {
   console.log("Found him at index" + found + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);