fetch("nav.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("#nav-placeholder").innerHTML = html;
    const hamburger = document.querySelector(".hamburger");
    const navLinksWrapper = document.querySelector(".links__wrapper");
    hamburger.addEventListener("click", () => {
      navLinksWrapper.classList.toggle("open");
      hamburger.classList.toggle("open");
    });
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("#footer-placeholder").innerHTML = html;
  });

// Floating WhatsApp button — appears on every page
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/254756985332?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20FadeCraft%20Barbershop";
whatsappBtn.target = "_blank";
whatsappBtn.rel = "noopener noreferrer";
whatsappBtn.className = "whatsapp-float";
whatsappBtn.setAttribute("aria-label", "Chat with us on WhatsApp");
whatsappBtn.innerHTML = `
  <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12.04 0C5.45 0 .104 5.354.103 11.943c0 2.105.55 4.16 1.595 5.973L0 24l6.224-1.633a11.918 11.918 0 005.815 1.482h.005c6.59 0 11.937-5.354 11.94-11.943.001-3.19-1.24-6.19-3.498-8.448A11.86 11.86 0 0012.04 0zm0 21.85h-.004a9.918 9.918 0 01-5.05-1.385l-.362-.215-3.694.969.987-3.6-.236-.37a9.882 9.882 0 01-1.515-5.305c0-5.46 4.444-9.903 9.91-9.903a9.84 9.84 0 016.998 2.9 9.86 9.86 0 012.9 7.012c-.003 5.46-4.446 9.897-9.934 9.897z"/>
  </svg>
`;
document.body.appendChild(whatsappBtn);
