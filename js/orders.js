// ========== ORDERS.JS ==========
let orders = JSON.parse(localStorage.getItem("mosOrders") || "[]");
let cart = [];

function saveOrders() {
  localStorage.setItem("mosOrders", JSON.stringify(orders));
}

function addToCart(code, qty) {
  let item = items.find((i) => i.code === code);
  if (!item) return alert("Invalid item code!");
  cart.push({ ...item, qty, subtotal: item.price * qty });
  renderCart();
}

function renderCart() {
  // Implement table rendering in your orders.html
}

function placeOrder(customer, discount) {
  let total = cart.reduce((t, i) => t + i.subtotal, 0);
  let final = total - (total * (discount || 0)) / 100;
  let order = {
    id: Date.now(),
    customer,
    items: cart,
    discount,
    total: final,
    date: new Date().toISOString(),
  };
  orders.push(order);
  saveOrders();
  cart = [];
  renderCart();
  alert("Order placed! (Implement PDF receipt if you like using jsPDF)");
}

window.onload = function () {
  // On your orders.html, set up event listeners for adding to cart and placing orders.
};
