document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are valid
    if (username === "admin" && password === "Test123") {
        // Successful login
        showSuccessMessage("Login successful");

        // Add code for redirecting or further actions after successful login
        window.location.href = "index.html"; // Redirect to the dashboard page
        // Perform other actions or set up user session, etc.

    } else {
        // Invalid login
        showErrorMessage("Invalid username or password");
    }
});

function showSuccessMessage(message) {
    var errorElement = document.getElementById("loginError");
    errorElement.textContent = message;
    errorElement.style.color = "#4caf50";
}

function showErrorMessage(message) {
    var errorElement = document.getElementById("loginError");
    errorElement.textContent = message;
    errorElement.style.color = "red";
}
