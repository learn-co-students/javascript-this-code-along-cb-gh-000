const app = "I don't do much."
function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
}
 
function serve() {
  console.log("here's your " + this.name + ", enjoy!");
}
 
var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

serve.call(gc);
serve.call(pbj);

function serve(customer) {
  console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
}

// Pass argument for this and pass arguments after
serve.call(gc, "Terry");
serve.call(pbj, "Jesse");

// Apply takes two arguments -- value of this, and array of arguments to pass to target funcion
serve.apply(gc, ["Terry"]);
serve.apply(pbj, ["Jesse"]);

function deliverFood(customer, table) {
  console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}
 
deliverFood.call(gc, "Terry", "4");
deliverFood.apply(pbj, ["Jesse", "15"]);

// Functions with variable number of arguments 
// Doesnt have any arguments but can still pass them
function serve() {
	if(arguments.length > 0) {
		var customers = Array.prototype.slice.call(arguments);
		last = customers.pop();
		console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
	}
	else {
		console.log(this.name + ". Order up!");
	}
}

serve.call(gc); //"Grilled Cheese. Order up!".
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

//Using bind is similar to call in that the first argument will be the value for this in the target function, then any arguments for the target function come in order after that.

//The big difference between bind and call is in the execution. When we use call, we execute the function immediately. When we use bind, we actually create a new function with that this value set, and we can execute it whenever.

var describeSalad = pbj.describe.bind(salad);
describeSalad();

salad.describe = pbj.describe.bind(salad);

//ASYNC Example 

//create new Customer instance
var sally = new Customer("Sally", "4");
 
//schedule table visit
var visitSally = visitTable.bind(sally);
setTimeout(visitSally, 1000);