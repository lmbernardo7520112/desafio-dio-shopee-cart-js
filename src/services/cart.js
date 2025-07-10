async function addItem(userCart, item) {
  userCart.push(item);
}

// Calculates the total value of a cart
async function calculateTotal(userCart) {
  console.log("\n🛒 Shopee Cart Total is:");
  const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`-> Total: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`);
}

// Displays the content of a given cart
async function displayCart(cartName, userCart) {
    console.log(`\n📜 ${cartName} List:`);
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - ${item.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} | ${item.quantity}x | Subtotal: ${item.subtotal().toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`
        );
    });
}

// Deletes an item completely from the cart, regardless of quantity
async function deleteItem(userCart, itemName) {
  const index = userCart.findIndex((item) => item.name === itemName);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// Removes one unit of an item. If quantity becomes 0, it removes the item.
async function removeItem(userCart, itemName) {
  const indexFound = userCart.findIndex((item) => item.name === itemName);

  // Case 1: Item not found
  if (indexFound === -1) {
    console.log("\nItem not found.");
    return;
  }

  const item = userCart[indexFound];

  // Case 2: Item quantity is more than 1, so just decrease it
  if (item.quantity > 1) {
    item.quantity--;
    return;
  }

  // Case 3: Item quantity is 1, so remove it from the cart
  if (item.quantity === 1) {
    userCart.splice(indexFound, 1);
  }
}


export {
  addItem,
  calculateTotal,
  displayCart,
  deleteItem,
  removeItem,
};