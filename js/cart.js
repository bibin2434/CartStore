document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout");
    const logoutButton = document.getElementById("logout");

    function updateCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCart();
            });

            listItem.appendChild(deleteButton);
            cartItemsContainer.appendChild(listItem);
            total += item.price;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    checkoutButton.addEventListener("click", function () {
        alert("Your order will reach soon");
    });

    logoutButton.addEventListener("click", function () {

        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        window.location.href = "login.html";
    });

    updateCart(); 
});
