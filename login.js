document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var users = [
        { username: 'admin', password: 'Test123' },
        { username: 'rikrujo', password: 'Muscles123' },
        { username: 'aperez', password: 'I love Dick' },
        { username: 'ladam', password: 'Richard is cool' }
        // Add more username/password pairs as needed
    ];

    function checkCredentials(username, password) {
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username === username && user.password === password) {
                return true; // Username and password match
            }
        }
        return false; // No matching username and password found
    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (checkCredentials(username, password)) {
        showSuccessMessage("Login successful");
        console.log('Username and password are correct.');
        // Add code for redirecting or further actions after successful login
        window.location.href = "https://richardmarrujo.github.io/Road-Rater/index.html"; // Redirect to the dashboard page
        // Perform other actions or set up user session, etc.
    } else {
        // Invalid login
        showErrorMessage("Invalid username or password");
        console.log('Invalid username or password.');
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
