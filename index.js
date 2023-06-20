// Logout logic
document.getElementById("logoutButton").addEventListener("click", function () {
    // Add code for logout action
    // Perform necessary tasks such as clearing user session, resetting data, etc.

    // Redirect the user to the login page
    window.location.href = "https://richardmarrujo.github.io/Road-Rater/login.html";
});

// Use Enter as a submit button
document.getElementById("Submit").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Prevent form submission
        event.preventDefault();

        // Get the form field values
        var dateValue = "Date: " + document.getElementById("dateField").value;
        var rateValue = "Rate: " + document.getElementById("rateField").value;
        var plateField = "Plate: " + document.getElementById("plateField").value;
        var commentsValue = "Comments: " + document.getElementById("commentsField").value;
        
        // Create an array to store the values
        var fieldData = [dateValue, rateValue, plateField, commentsValue];


        // Log the array for demonstration
        console.log(fieldData);

        // Unhide the submitted text
        var resultDiv = document.getElementById("submittedText");
        resultDiv.style.opacity = 1;
        resultDiv.style.height = "auto";

        // Show the most recent array of form field values
        var arrayDataDiv = document.getElementById("arrayData");
        arrayDataDiv.textContent = "Most Recent Submission:\n" + fieldData.join("\n");

        // Fade back out after a certain duration
        setTimeout(function () {
            submittedText.style.opacity = 0;
            submittedText.style.height = 0;
        }, 3000); // Change the duration (in milliseconds) as needed
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".dropdown");
    var arrowSelect = dropdown.querySelector(".arrowSelect");

    arrowSelect.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });
});
