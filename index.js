const app = "I don't do much."

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut
  this.serve = function () {
    console.log(`here's your ${this.name}, enjoy!`);
  }
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle");
var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss", "russian dressing"], "diagonal");


var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log(`here's your ${this.name}, enjoy!`);
  }
}

blt.name = "BLT";
blt.serve();

function serve() {
  console.log("here's your " + this.name + ", enjoy!");
}
