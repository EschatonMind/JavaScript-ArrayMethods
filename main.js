// filter method
console.log("-----------------------filter method");

const Users = [
  { name: "A", premium: true },
  { name: "B", premium: false },
  { name: "C", premium: true },
  { name: "D", premium: false },
  { name: "E", premium: true },
];

const prusers = Users.filter((user) => user.premium);
console.log(prusers);

// map method
console.log("-----------------------map method");

const products = [
  { name: "A", price: 20 },
  { name: "B", price: 30 },
  { name: "V", price: 40 },
  { name: "D", price: 50 },
  { name: "S", price: 110 },
];

const salesPrices = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(salesPrices, products);

// reduce method
console.log("-----------------------reduce method");

const players = [
  { player: "A", score: 30 },
  { player: "V", score: 440 },
  { player: "C", score: 120 },
  { player: "V", score: 20 },
  { player: "Z", score: 40 },
  { player: "A", score: 50 },
  { player: "C", score: 60 },
  { player: "V", score: 90 },
  { player: "B", score: 10 },
];

const gameTotal = players.reduce((acc, curr) => {
  if (curr.player === "V") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(gameTotal);

// find method
console.log("-----------------------find method");

const numbers = [10, 20, 30, 55, 100, 23];

const FHN = numbers.find((number) => number % 2 !== 0);

console.log(FHN);

// sort method
console.log("-----------------------sort method");

players.sort((a,b) => b.score -a.score)

console.log(players)

// Chaining methods
console.log("-----------------------Chaining methods");

const promos = products
.filter(product => product.price > 30)
.map(product => `The ${product.name} is ${product.price/2}`)
.sort((a,b) => b.price-a.price)
.reverse()

console.log(promos)