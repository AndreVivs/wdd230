const today = new Date().getDay();

if (
  document.readyState === "complete" ||
  (document.readyState === "interactive" && today >= 1 && today <= 3)
) {
  // El DOM ya está cargado, ejecutar inmediatamente
  initBanner();
} else {
  document.addEventListener("DOMContentLoaded", initBanner);
}

// Definir la función que genera el banner
function initBanner() {
  const nav = document.querySelector("nav"); // Selecciona el <header>
  //   if (!header) {
  //     console.warn("No se encontró el <header>, el banner no se insertará.");
  //     return;
  //   }

  // Eliminar si ya existe
  let existingBanner = document.getElementById("event-banner");
  if (existingBanner) {
    existingBanner.remove();
  }

  // Crear el banner
  const banner = document.createElement("div");
  banner.id = "event-banner";
  banner.className = "banner";
  banner.innerHTML = `
        <p>Join us for the Chamber of Commerce Meet and Greet this Wednesday at 7:00 p.m.! 🎉</p>
        <button id="close-banner">❌</button>
    `;

  // Insertar el banner después del header
  nav.insertAdjacentElement("afterend", banner);

  // Agregar evento para cerrar el banner
  document
    .getElementById("close-banner")
    .addEventListener("click", function () {
      banner.remove();
    });
}
