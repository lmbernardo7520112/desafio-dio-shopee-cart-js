async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    // Method to calculate the subtotal for this specific item
    subtotal: () => price * quantity,
  };
}

export default createItem;