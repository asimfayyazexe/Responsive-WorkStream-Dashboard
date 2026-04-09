document.addEventListener("DOMContentLoaded", function () {
  // Select all needed elements
  const root = document.documentElement;
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const sideBar = document.getElementById("sidebar");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");

  // Get saved theme from localStorage
  let savedTheme = localStorage.getItem("dashboard-theme");

  // Apply saved theme when page loads
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);

    // Set correct icon for light theme
    if (savedTheme === "dark") {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  } else {
    // Default theme if nothing is saved
    root.setAttribute("data-theme", "light");
  }

  // Open sidebar menu
  menuToggle.addEventListener("click", function () {
    sideBar.classList.add("active");
    mobileOverlay.classList.add("active");
    document.body.classList.add("menu-open");
  });

  // Close sidebar menu with close button
  closeMenu.addEventListener("click", function () {
    sideBar.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  });

  // Close sidebar menu when clicking overlay
  mobileOverlay.addEventListener("click", function () {
    sideBar.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  });

  // Switch between light and dark theme
  themeToggle.addEventListener("click", function () {
    let currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "dark") {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("dashboard-theme", "light");

      // Change icon to moon for light mode
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("dashboard-theme", "dark");

      // Change icon to sun for dark mode
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
  });

  // Close mobile menu when screen becomes large
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      sideBar.classList.remove("active");
      mobileOverlay.classList.remove("active");
      document.body.classList.remove("menu-open");
    }
  });
});
