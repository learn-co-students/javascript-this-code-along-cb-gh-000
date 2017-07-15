const app = "I don't do much."
var blt = {
  bread: "white",
  ingredients: ["bacon", "lettuce", "tomato"],
  cut: "diagonal",
  name: "BLT",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

blt.serve();
