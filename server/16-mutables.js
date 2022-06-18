const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

let updates;

// Challenge 1
// Filter products list according by cart's product list (myProducts)
function productsFiltered(products, productIndexes) {
  return products.filter(item => !productIndexes.includes(item.id));
}

// Challenge 2
// Update products list according updates array
function productsUpdates(products, updates) {
  if (updates != undefined) {
    return products.map(item => {
      itemTemp = item;
      updates.map(update => {
        if (item.id === update.id) {
          itemTemp = {
            ...item,
            ...update.changes,
          }
        }
      });
      return itemTemp;
    });
  } else {
    return products;
  }
}

// Show lists status
function printStatus(products, myProducts, updates) {
  // Get cart's product indexes
  let productIndexes = myProducts.map(item => item.id);
  let productsTemp = productsFiltered(productsUpdates(products, updates), productIndexes);
  console.log("products", productsTemp);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
}

printStatus(products, myProducts, updates);

const productIndex = products.findIndex(item => item.id === '🍔');
if (productIndex !== -1) {
  // Added to cart
  myProducts.push(products[productIndex]);
  // Mutable erasing
  // products.splice(productIndex, 1);
}

printStatus(products, myProducts, updates);

// Update a product
updates = [
  {
    id: "🥞",
    changes: {
      price: 30,
      description: 'Delicious',
    }
  },
  {
    id: "🍕",
    changes: {
      price: 50,
      description: 'Great',
    }
  }
];
printStatus(products, myProducts, updates);

// Mutables update
/*
const productIndex2 = products.findIndex(item => item.id === update.id);
products[productIndex2] = {
  ...products[productIndex2],
  ...update.changes,
}*/
