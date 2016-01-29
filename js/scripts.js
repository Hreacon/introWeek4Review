function PizzaMenu() {
  this.sizes = ['Personal 8"', 'Small 10"', 'Medium 12"', 'Large 14"', 'Family 16"'];
  this.costPerSize = [ 8.99, 10.99, 12.99, 14.99, 16.99 ];
  this.toppings = ['Pepperoni', 'Beef',  'Black Olives',   'Canadian Bacon',  'Crispy Bacon',   'Garlic',   'Green Peppers',  'Grilled Chicken',   'Herb & Cheese Blend',   'Italian Sausage',  'Artichoke Hearts',   'Mixed Onions',   'Mozzarella Cheese',  'Mushrooms',  ' Onions',   'Parmesan Cheese',    'Pineapple',   'Roma Tomatoes',  'Salami',   'Spinach',   'Sun-Dried Tomatoes',  'Zucchini',   'Extra Cheese'];
  this.costPerTopping = 1;
  this.firstToppingsIncluded = 2;
}

PizzaMenu.prototype.costOfPizza = function(size, numOfToppings) {
  var cost = 0;
  if(this.sizes.indexOf(size) >= 0)
    cost += this.costPerSize[this.sizes.indexOf(size)];
  if(numOfToppings > this.firstToppingsIncluded) {
    cost += (numOfToppings - this.firstToppingsIncluded) * this.costPerTopping;
  }
  return Math.floor(Math.round(cost*100))/100;
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

Pizza.prototype.getToppings = function() {
  var output = '';
  this.toppings.forEach(function(topping) {
    output += '<div>' + topping + '</div>';
  });
  return output;
}

function Cart() {
  this.pizzas = [];
}

Cart.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Cart.prototype.countPizzas = function() {
  return this.pizzas.length;
}

function updateCurrentOrder(menu, pizza) {
  var output = "Size: " + pizza.size + " Toppings: " + pizza.getToppings();
  output += ' Price: $' + menu.costOfPizza(pizza.size, pizza.countToppings());
  $('.currentOrder').html(output);
  $('.currentOrder div').each(function() {
    $(this).click(function() {
      pizza.toggleTopping($(this).html());
      updateCurrentOrder(menu, pizza);
      var topping = $(this).html();
      $('.toppings div').each(function() {
        if($(this).html() === topping)
          $(this).toggleClass('selected');
      });
    });
  });
}

$(document).ready(function() {
  var menu = new PizzaMenu();
  var pizza;
  $('#buildPizza').click(function() {
    pizza = new Pizza();
    updateCurrentOrder(menu, pizza);
    $('.landing').hide();
    $('.order').show();
    $('.sizes').html(menu.getSizes());
    $('.sizes div').each(function() {
      $(this).click(function() {
        pizza.size = $(this).html();
        updateCurrentOrder(menu, pizza);
        console.log("New Pizza size = " + pizza.size);
        $('.sizes div').each(function() {
          $(this).removeClass('selected');
        });
        $(this).addClass('selected');
      });
    });
    $('.toppings').html(menu.getToppings());
    $('.toppings div').each(function() {
      $(this).click(function() {
        pizza.toggleTopping($(this).html());
        $(this).toggleClass('selected');
        updateCurrentOrder(menu, pizza);
      });
    });
  });
});
