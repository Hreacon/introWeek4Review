function PizzaMenu() {
  this.sizes = ['Personal 8"', 'Small 10"', 'Medium 12"', 'Large 14"', 'Family 16"'];
  this.costPerSize = [ 8.99, 10.99, 12.99, 14.99, 16.99 ];
  this.toppings = ['Pepperoni', 'Beef',  'Black Olives',   'Canadian Bacon',  'Crispy Bacon',   'Garlic',   'Green Peppers',  'Grilled Chicken',   'Herb & Cheese Blend',   'Italian Sausage',  'Artichoke Hearts',   'Mixed Onions',   'Mozzarella Cheese',  'Mushrooms',  ' Onions',   'Parmesan Cheese',    'Pineapple',   'Roma Tomatoes',  'Salami',   'Spinach',   'Sun-Dried Tomatoes',  'Zucchini',   'Extra Cheese'];
  this.costPerTopping = 1;
  this.firstToppingsIncluded = 2;
}

PizzaMenu.prototype.costOfPizza = function(size, numOfToppings) {
  var cost = this.costPerSize[this.sizes.indexOf(size)];
  if(numOfToppings > this.firstToppingsIncluded) {
    cost += (numOfToppings - this.firstToppingsIncluded) * this.costPerTopping;
  }
  return cost;
}

PizzaMenu.prototype.putArrayInDiv = function(arrayIn) {
  var output = '';
  arrayIn.forEach(function(elem) {
    output += '<div>' + elem + '</div>';
  });
  return output;
}

PizzaMenu.prototype.getToppings = function() {
  return this.putArrayInDiv(this.toppings);
}

PizzaMenu.prototype.getSizes = function() {
  var sizeAndPrice = [];
  for(var i=0;i<this.sizes.length;i++) {
    sizeAndPrice.push(this.sizes[i]);
  }
  return this.putArrayInDiv(sizeAndPrice);
}

function Pizza() {
  this.size='';
  this.toppings = [];
}
Pizza.prototype.toggleTopping = function(topping) {
  var index = this.toppings.indexOf(topping);
  if( index >= 0) {
    this.toppings.splice(index, 1);
  } else this.toppings.push(topping);
}
Pizza.prototype.addTopping = function(topping) {
  this.togleTopping(topping);
}

Pizza.prototype.countToppings = function() {
  return this.toppings.length;
}

Pizza.prototype.removeTopping = function(topping) {
  this.toggleTopping(topping);
}
