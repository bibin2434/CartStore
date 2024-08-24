document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("fom");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = form.querySelector("input[type='text']").value;
        const password = form.querySelector("input[type='password']").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.email === email && user.password === password) {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
