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
}

blt.name = "BLT";
blt.serve();

function serve() {
  console.log("here's your " + this.name + ", enjoy!");
}

serve.call(pbj);
serve.apply(pbj);

function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"],
"Peanut Butter & Jelly");

serve.call(gc, "Terry");
serve.call(pbj, "Jesse");
serve.apply(gc, ["Terry"]);
serve.apply(pbj, ["Jesse"]);

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);

function serve() {
    if(arguments.length > 0) {
        var customers = Array.prototype.slice.call(arguments);
        last = customers.pop();
        console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
    }else {
        console.log(this.name + ". Order up!");
    }
}

serve.call(gc);
serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

pbj.describe();

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

pbj.describe.call(salad);

var describeSalad = pbj.describe.bind(salad);
describeSalad();
salad.describe = pbj.describe.bind(salad);

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

//create new Customer instance
var sally = new Customer("Sally", "4");

//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);
