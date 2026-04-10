function addToBasket(name, price) {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];

  price = Number(price); // IMPORTANT FIX

  let existing = basket.find(item => item.name === name);

  if (existing) {
    existing.quantity += 1;
  } else {
    basket.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("basket", JSON.stringify(basket));

  console.log("Basket now:", basket); // DEBUG LINE
  alert(name + " added to basket");
}