import createItem from "./entities/item.js";
import * as cartService from "./services/cart.js";

async function main() {
  console.log("🛍️ Welcome to the Shopee Cart! 🛍️");

  // Create two separate lists: a cart and a wishlist
  // This demonstrates the reusability of our cart service
  const myCart = [];
  const myWishlist = [];

  const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
  const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);
  const item3 = await createItem("Hotwheels Porsche", 15.50, 2);

  console.log("\n--- ADDING ITEMS ---");
  await cartService.addItem(myCart, item1);
  await cartService.addItem(myCart, item2);
  await cartService.addItem(myWishlist, item3);

  await cartService.displayCart("My Cart", myCart);
  await cartService.displayCart("My Wishlist", myWishlist);

  console.log("\n--- REMOVING ONE LAMBORGHINI ---");
  await cartService.removeItem(myCart, "Hotwheels Lamborghini");
  await cartService.displayCart("My Cart", myCart);
  
  console.log("\n--- DELETING FERRARI ---");
  await cartService.deleteItem(myCart, "Hotwheels Ferrari");
  await cartService.displayCart("My Cart", myCart);

  await cartService.calculateTotal(myCart);
}

main();