function avg(data) {
  // your code here
  let dataSum = 0;
  for (let i = 0; i < data.size; i++) {
    dataSum += data.products[i].price;
  }
  return dataSum / data.size;
}

function avgReduce(data) {
  // Try out reduce method
  return (
    data.products.reduce((sum, product) => sum + product.price, 0) / data.size
  );
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
