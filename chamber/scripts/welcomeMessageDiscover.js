const visitsDisplay = document.querySelector(".visit-message");
const lastVisitTimestamp = localStorage.getItem("lastVisitTimestamp");

if (!lastVisitTimestamp || isNaN(parseInt(lastVisitTimestamp, 10))) {
  // First visit: Show the welcome message
  visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
  // Get the current timestamp and the stored last visit timestamp
  const currentTimestamp = Date.now();
  const lastVisit = parseInt(lastVisitTimestamp, 10); // Convert string to integer

  // Calculate the difference in milliseconds and convert to days
  const msToDays = 1000 * 60 * 60 * 24;
  const timeDifference = Math.round((currentTimestamp - lastVisit) / msToDays);

  if (timeDifference === 0) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
  } else if (timeDifference === 1) {
    visitsDisplay.textContent = `You last visited 1 day ago.`;
  } else {
    visitsDisplay.textContent = `You last visited ${timeDifference} days ago.`;
  }
}

//Store the current timestamp in localStorage
localStorage.setItem("lastVisitTimestamp", Date.now().toString());

document.getElementById("loadedtimestamp").value = new Date().toISOString();
