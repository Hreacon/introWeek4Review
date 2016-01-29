describe("PizzaMenu", function() {
  it('contains an array of sizes', function() {
    var menu = new PizzaMenu();
    expect(menu.sizes[0]).to.equal('Personal');
  });
  it('contains an array of toppings', function() {
    var menu = new PizzaMenu();
    expect(menu.toppings[0]).to.equal('Pepperoni');
  });
});
