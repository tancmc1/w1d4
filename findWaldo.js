function findWaldo(arr, found) {
  arr.forEach(function(arr) {
    if (arr === "Waldo") {
      found();
    }
  })
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);