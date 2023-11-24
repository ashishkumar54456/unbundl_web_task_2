 // Get the products and the summary elements
 const products = document.querySelectorAll(".product");
 const summaryItems = document.getElementById("summary-items");
 const summaryTotal = document.getElementById("summary-total");

 // Define a function to update the summary
 function updateSummary() {
   // Initialize the summary variables
   let items = 0;
   let total = 0;
   let html = "";

   // Loop through the products
   for (let product of products) {
     // Get the product name, price and quantity
     let name = product.dataset.name;
     let price = parseInt(product.dataset.price);
     let quantity = parseInt(product.querySelector("input").value);

     // Update the items and total
     items += quantity;
     total += price * quantity;

     // If the quantity is positive, add a summary item
     if (quantity > 0) {
       html += `<li>${name} x ${quantity} = ₹${price * quantity}</li>`;
     }
   }

   // If the items are more than 8, alert the user and reset the values
   if (items > 8) {
     alert("You can only select up to 8 items for your custom pack.");
     items = 0;
     total = 0;
     html = "";
     for (let product of products) {
       product.querySelector("input").value = 0;
     }
   }

   // Update the summary elements
   summaryItems.innerHTML = html;
   summaryTotal.textContent = `Total: ₹${total}`;
 }