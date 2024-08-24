document.addEventListener("DOMContentLoaded", function () {
    const profileForm = document.getElementById("fom");
    const logoutButton = document.getElementById("logout");
    function loadUserProfile() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            document.getElementById("name").value = user.name || "";
            document.getElementById("email").value = user.email || "";
            document.getElementById("address").value = user.address || "";
            document.getElementById("phone").value = user.contactNumber|| "";
        } else {
           
            window.location.href = "login.html";
        }
    }

   
    profileForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const updatedUser = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            address: document.getElementById("address").value,
            contactNumber: document.getElementById("phone").value
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Profile updated successfully!");
        window.location.href = "index.html";
    });

  
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
           
            localStorage.removeItem("user");
            localStorage.removeItem("cart");

          
            window.location.href = "login.html";
        });
    }

  
    loadUserProfile();
});
