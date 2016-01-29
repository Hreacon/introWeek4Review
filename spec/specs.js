describe("PizzaMenu", function() {
  it('contains an array of sizes', function() {
    var menu = new PizzaMenu();
    expect(menu.sizes[0]).to.equal('Personal 8"');
  });
  it('contains an array of toppings', function() {
    var menu = new PizzaMenu();
    expect(menu.toppings[0]).to.equal('Pepperoni');
  });
  it('tells you the cost of a pizza given size and number of toppings', function() {
    var menu = new PizzaMenu();
    expect(menu.costOfPizza('Personal 8"', 3)).to.equal(9.99);
  });
  it('provides a list of toppings in divs for display', function() {
    var menu = new PizzaMenu();
    expect(menu.getToppings()).to.equal("<div>Pepperoni</div><div>Beef</div><div>Black Olives</div><div>Canadian Bacon</div><div>Crispy Bacon</div><div>Garlic</div><div>Green Peppers</div><div>Grilled Chicken</div><div>Herb & Cheese Blend</div><div>Italian Sausage</div><div>Artichoke Hearts</div><div>Mixed Onions</div><div>Mozzarella Cheese</div><div>Mushrooms</div><div> Onions</div><div>Parmesan Cheese</div><div>Pineapple</div><div>Roma Tomatoes</div><div>Salami</div><div>Spinach</div><div>Sun-Dried Tomatoes</div><div>Zucchini</div><div>Extra Cheese</div>");
  });
});

describe('Pizza', function() {
  it('knows it own size', function() {
    var menu = new PizzaMenu();
    var pizza = new Pizza();
    pizza.size = menu.sizes[0];
    expect(pizza.size).to.equal('Personal 8"');
  });
  it('Knows which toppings it has', function() {
    var menu = new PizzaMenu();
    var pizza = new Pizza();
    pizza.addTopping(menu.toppings[0]);
    expect(pizza.toppings[0]).to.equal('Pepperoni');
  });
  it('can tell you how many toppings it has', function() {
    var menu = new PizzaMenu();
    var pizza = new Pizza();
    pizza.addTopping(menu.toppings[0]);
    expect(pizza.countToppings()).to.equal(1);
  });

  it('can remove toppings', function() {
    var menu = new PizzaMenu();
    var pizza = new Pizza();
    pizza.addTopping(menu.toppings[0]);
    pizza.addTopping(menu.toppings[2]);
    pizza.removeTopping(menu.toppings[2]);
    expect(pizza.countToppings()).to.equal(1);
  });
});
