/*
size
topping 2
makepizza
*/

function addExtraCheese(pizza) {
  return `${pizza} with extra cheese`;
}

function addPeperoni(pizza) {
  return `${pizza} with peperoni`;
}

function pizzaSize(size) {
  return `${size} pizza`;
}

function makePizza(size, topping) {
  return topping(size);
}

console.log(makePizza(pizzaSize(`large`), addPeperoni));


// const getHelp = (help) =>
// {

// };