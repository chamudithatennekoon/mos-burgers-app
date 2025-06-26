// ========== REPORTS.JS ==========
function monthlySalesReport(month, year) {
  return orders.filter((o) => {
    let d = new Date(o.date);
    return d.getMonth() === month && d.getFullYear() === year;
  });
}

// Show this in a table in reports.html
