const app = "I don't do much.";

function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function () {
    console.log(`Your ${this.name} includes: ${this.ingredients.join(', ')}. Yum!`);
  };
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

function serve() {
  if (arguments.length > 0) {
    const customers = Array.prototype.slice.call(arguments);
    const last = customers.pop();
    console.log(`${this.name} for ${customers.join(', ')} and ${last}. Enjoy!`);
  } else {
    console.log(`${this.name}. Order up!`);
  }
}

function deliverFood(customer, table) {
  console.log(`Delivering ${this.name} to ${customer} at table ${table}`);
}

function visitTable() {
  console.log(`The server is visiting ${this.name} at table number ${this.tableNumber}`);
}

const gc = new Sandwich(
  'white',
  ['cheese'],
  'Grilled Cheese',
);

const pbj = new Sandwich(
  'wheat',
  ['peanut butter', 'raspberry jam'],
  'Peanut Butter & Jelly',
);

const reuben = new Sandwich(
  'rye',
  ['corned beef', 'sauerkraut', 'swiss', 'russian dressing'],
  'Reuben',
);

const blt = new Sandwich(
  'white',
  ['bacon', 'lettuce', 'tomato', 'mayo'],
  'BLT',
);

const salad = {
  ingredients:
  [
    'croutons',
    'romaine hearts',
    'steak',
    'parmesan',
    'caesar dressing',
  ],
  name: 'Steak Caesar',
};

const describeSalad = pbj.describe.bind(salad);

const sally = new Customer('Sally', '4');
const visitSally = visitTable.bind(sally);

deliverFood.call(gc, 'Terry', '4');
deliverFood.apply(pbj, ['Jesse', '15']);

serve.call(gc);
serve.apply(pbj, ['Terry', 'Tom', 'Tabitha']);

pbj.describe();
pbj.describe.call(salad);


describeSalad();

salad.describe = pbj.describe.bind(salad);
salad.describe();

setTimeout(visitSally, 1000);
