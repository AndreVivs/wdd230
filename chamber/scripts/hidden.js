document.getElementById("hidden").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission temporarily

  const currentDate = new Date();
  const timestamp = currentDate.toISOString();

  document.getElementById("timestamp").value = timestamp;

  // Now you can submit the form after setting the timestamp
  this.submit();
});
