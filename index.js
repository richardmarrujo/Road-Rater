// Logout logic
document.getElementById("logoutButton").addEventListener("click", function () {
    // Add code for logout action
    // Perform necessary tasks such as clearing user session, resetting data, etc.

    // Redirect the user to the login page
    window.location.href = "https://richardmarrujo.github.io/Road-Rater/login.html";
});

// Use Enter as a submit button
document.getElementById("Submit").addEventListener("click", function (event) {
    // Prevent form submission
    event.preventDefault();

    // Get the form field values
    var dateValue = "Date: " + document.getElementById("dateField").value;
    var rateValue = "Rate: " + document.getElementById("rateField").value;
    var plateField = "Plate: " + document.getElementById("plateField").value;
    var commentsValue = "Comments: " + document.getElementById("commentsField").value;

// Create an array to store the values
    var fieldData = [dateValue, rateValue, plateField, commentsValue];
    if (fieldData[0].length < 7 || fieldData[1] < 7){
        confirm("Are you sure you want to submit the form without a Date or Rate?")
    }

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

    // Clear the form fields
    document.getElementById("dateField").value = "";
    document.getElementById("rateField").value = "";
    document.getElementById("plateField").value = "";
    document.getElementById("commentsField").value = "";

});


document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".dropdown");
    var arrowSelect = dropdown.querySelector(".arrowSelect");

    arrowSelect.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the search input element
    var searchInput = document.getElementById("searchInput");

    // Add event listener to hide placeholder on focus
    searchInput.addEventListener("focus", function () {
        searchInput.placeholder = "";
    });

    // Add event listener to show placeholder on blur if the input is empty
    searchInput.addEventListener("blur", function () {
        if (!searchInput.value) {
            searchInput.placeholder = "Search Plate #";
        }
    });
});

// Add event listener to handle search button click
var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    // Add logic to perform search based on input value
    var searchQuery = searchInput.value;
    console.log("Performing search for:", searchQuery);
    // Clear the input field after performing search
    searchInput.value = "";
});
