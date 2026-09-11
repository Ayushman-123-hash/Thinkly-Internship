let cart = 0;

function addCart() {
    cart++;
    document.getElementById("cartCount").innerText = cart;
}

function searchProduct() {
    let value = document.getElementById("searchInput").value;

    if (value.trim() === "") {
        alert("Please enter a product name");
    } else {
        alert("Search: " + value);
    }
}

document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});