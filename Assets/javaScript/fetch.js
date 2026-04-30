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
