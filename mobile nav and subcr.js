// Nav Bar for mobile

const menuButton = document.getElementById("menu-button");
const hideButton = document.getElementById("hideSidebar");
const sidebar = document.getElementById("sidebar");

function showSidebar() {
  sidebar.style.display = "flex";
  hideButton.style.display = "block";
  menuButton.style.display = "none";
}

function hideSidebar() {
  sidebar.style.display = "none";
  hideButton.style.display = "none";
  menuButton.style.display = "block";
}

menuButton.addEventListener("click", showSidebar);
hideButton.addEventListener("click", hideSidebar);

// Add an event listener for window resize

window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    showSidebar();
    hideSidebar(); // Hide sidebar when screen width exceeds 800px
   
  }
});
