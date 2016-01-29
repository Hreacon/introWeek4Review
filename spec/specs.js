describe("PizzaMenu", function() {
  it('contains an array of sizes', function() {
    var menu = new PizzaMenu();
    expect(menu.sizes[0]).to.equal('Personal');
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
    expect(menu.getToppings()).to.equal();
  })
});
