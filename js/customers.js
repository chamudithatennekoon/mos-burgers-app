// ========== CUSTOMERS.JS ==========
let customers = JSON.parse(localStorage.getItem("mosCustomers") || "[]");

function saveCustomers() {
  localStorage.setItem("mosCustomers", JSON.stringify(customers));
}

function addCustomer(name, phone) {
  if (!name || !phone) return alert("Fill all fields!");
  customers.push({ id: Date.now(), name, phone });
  saveCustomers();
  renderCustomers();
}

function renderCustomers() {
  // Implement similar to items rendering, list all customers
}
