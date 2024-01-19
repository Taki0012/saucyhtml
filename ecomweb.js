// reference the tbody
let tbody = document.getElementById("shopcart");
    
// create  element variables
let tableRow = document.createElement("tr");
let cell1 = document.createElement("td");
let link = document.createElement("a");
let icon = document.createElement("i");
let cell2 = document.createElement("td");
let image = document.createElement("img");
let cell3 = document.createElement("td");
let heading = document.createElement("h5");
let cell4 = document.createElement("td");
let cell5 = document.createElement("td");
let input = document.createElement("input");
let cell6 = document.createElement("td");
let priceHeading = document.createElement("h5");
let deleteButton = document.createElement("button");

// image sources
let imghoodie1 = "Picture/hoodies/hoodies 1.webp";


// adding item to cart function
function itemtocart() {

    // create the first cell with a delete button
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    // Add an event listener to the delete button to remove the table row
    deleteButton.addEventListener("click", function() {
    // Get the reference to the parent row and remove it
    let rowToRemove = deleteButton.closest("tr");
    rowToRemove.remove();
    });

cell1.appendChild(deleteButton);
tableRow.appendChild(cell1);

    // create the second cell with an image
    image.src = imghoodie1; //sets image
    cell2.appendChild(image);
    tableRow.appendChild(cell2);

    // create the third cell with a heading
    heading.innerHTML = "SUNDRIED HOODIE<br>-VIOLET"; //sets text
    cell3.appendChild(heading);
    tableRow.appendChild(cell3);

    // create the fourth cell with a price
    cell4.innerHTML = "₱2999.00"; //sets price
    tableRow.appendChild(cell4);

    // create the fifth cell with a number input
    input.className = "quantity";
    input.value = "1";
    input.min = "1";  // set the minimum value
    input.max = "50"; // set the maximum value
    input.type = "number";
    cell5.appendChild(input);
    tableRow.appendChild(cell5);

    // add an event listener to update the total when the input changes
    input.addEventListener("input", function() {
        updateTotal();
    });
  
    cell5.appendChild(input);
    tableRow.appendChild(cell5);
  
    // create the sixth cell with a price
    priceHeading.innerHTML = "₱2999.00";
    cell6.appendChild(priceHeading);
    tableRow.appendChild(cell6);

    // append the table row to the tbody
    tbody.appendChild(tableRow);
}

// function to update the total based on the quantity input
function updateTotal() {
    let quantity = parseInt(input.value); // convert the input value to an integer
    let unitPrice = 2999.00; // replace with the actual unit price

    // calculate the total and update the content of cell 6
    let total = quantity * unitPrice;
    priceHeading.innerHTML = "₱" + total.toFixed(2); // display the total with 2 decimal places
}

// show hide function to combine the pages together in one html
function show(shown, hidden) {
    document.getElementById(shown).style.display = "block";
    document.getElementById(hidden).style.display = "none";
    return false;
}