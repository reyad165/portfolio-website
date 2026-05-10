window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");
  loader.style.display = "none";
});
// Setup and start animation!

var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "Graphic Designer",
    "Web Designer",
    "Video Editor",
  ],
  typeSpeed: 50,
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("navLinks").classList.remove("active");
}
