// Get the current year
const currentYear = new Date().getFullYear();

// Update the footer with the current year
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;

// Update the second paragraph in the footer with the last modified date
document.getElementById('lastModified').textContent = "Last modified: " + lastModifiedDate;