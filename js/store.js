// ========== STORE.JS ==========
let items = JSON.parse(localStorage.getItem("mosItems") || "[]");

function saveItems() {
  localStorage.setItem("mosItems", JSON.stringify(items));
}

function renderItems() {
  let table = document.querySelector("#itemsTable tbody");
  if (!table) return;
  table.innerHTML = "";
  items.forEach((item, idx) => {
    const expired = item.expiry && new Date(item.expiry) < new Date();
    table.innerHTML += `
            <tr${expired ? ' style="background:#ffd4d4"' : ""}>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.discount || 0}%</td>
                <td>${item.expiry || ""}</td>
                <td>
                    <button onclick="editItem(${idx})">Edit</button>
                    <button onclick="deleteItem(${idx})">Delete</button>
                </td>
            </tr>
        `;
  });
}

window.addItemForm?.addEventListener("submit", function (e) {
  e.preventDefault();
  let code = itemCode.value.trim();
  let name = itemName.value.trim();
  let price = parseFloat(itemPrice.value);
  let discount = parseFloat(itemDiscount.value) || 0;
  let expiry = itemExpiry.value;

  if (!code || !name || isNaN(price)) {
    alert("Please fill all required fields!");
    return;
  }
  items.push({ code, name, price, discount, expiry });
  saveItems();
  renderItems();
  this.reset();
});

window.deleteItem = function (idx) {
  if (confirm("Delete this item?")) {
    items.splice(idx, 1);
    saveItems();
    renderItems();
  }
};

window.editItem = function (idx) {
  let item = items[idx];
  itemCode.value = item.code;
  itemName.value = item.name;
  itemPrice.value = item.price;
  itemDiscount.value = item.discount;
  itemExpiry.value = item.expiry;
  // Remove for re-adding on submit
  items.splice(idx, 1);
  saveItems();
  renderItems();
};

document.addEventListener("DOMContentLoaded", renderItems);
