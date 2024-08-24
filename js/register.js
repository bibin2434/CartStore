document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("fom");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const password = form.querySelector("input[type='password']").value;
        const address = form.querySelector("textarea[name='address']").value;
        const contactNumber = form.querySelector("input[id='num']").value;

        const user = {
            name: name,
            email: email,
            password: password,
            address: address,
            contactNumber: contactNumber
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful!");

        window.location.href = "login.html";
    });
});
