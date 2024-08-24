document.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        document.querySelector("h1").textContent = `Hello ${user.name}, Welcome to Online Grocery Store`;
    } else {
   
        window.location.href = "login.html";
    }

    const products = document.querySelectorAll(".prod");
    products.forEach(product => {
        const addButton = product.querySelector("button");
        addButton.addEventListener("click", function () {
            const productName = product.querySelector("h2:first-of-type").textContent;
            const productPrice = parseFloat(product.querySelector("h2:nth-of-type(2)").textContent.replace('$', ''));

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            cart.push({ name: productName, price: productPrice });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} has been added to your cart!`);
        });
    });

   
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
  
            localStorage.removeItem("user");
            localStorage.removeItem("cart");

            window.location.href = "login.html";
        });
    }
});
