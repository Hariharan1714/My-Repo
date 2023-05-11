// Define the array to hold candy items
var candyItems = [];

// Function to add a new candy item
function addCandyItem() {
	// Get the values from the input fields
	var candyName = document.getElementById("candyName").value;
	var candyPrice = document.getElementById("candyPrice").value;
	var candyQuantity = document.getElementById("candyQuantity").value;

	// Add the candy item to the array
	candyItems.push({name: candyName, price: candyPrice, quantity: candyQuantity});

	// Clear the input fields
	document.getElementById("candyName").value = "";
	document.getElementById("candyPrice").value = "";
	document.getElementById("candyQuantity").value = "";

	// Call the function to display the candy items
	displayCandyItems();
}

// Function to display the candy items
function displayCandyItems() {
	// Get the table body element
	var tableBody = document.getElementById("candyTableBody");

	// Clear the table body
	tableBody.innerHTML = "";

	// Loop through the candy items and add them to the table
	for (var i = 0; i < candyItems.length; i++) {
		var candyItem = candyItems[i];
		var row = tableBody.insertRow(-1);
		var nameCell = row.insertCell(0);
		var priceCell = row.insertCell(1);
		var quantityCell = row.insertCell(2);
		var actionCell = row.insertCell(3);
	
		// Set the cell values
		nameCell.innerHTML = candyItem.name;
		priceCell.innerHTML = candyItem.price;
		quantityCell.innerHTML = candyItem.quantity;

		// Add the delete button to the action cell
		var deleteButton = document.createElement("button");
		deleteButton.innerHTML = "Delete";
		deleteButton.onclick = (function(item) {
			return function() {
				deleteCandyItem(item);
			}
		})(candyItem);
		actionCell.appendChild(deleteButton);
	}
}

// Function to delete a candy item
function deleteCandyItem(item) {
	// Find the index of the candy item in the array
	var index = candyItems.indexOf(item);

	// Remove the candy item from the array
	candyItems.splice(index, 1);

	// Call the function to display the candy items
	displayCandyItems();
}

// Call the function to display the candy items initially
displayCandyItems();
