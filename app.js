// Sidebar collapse
const sidebar = document.getElementById("sidebar");
const collapseBtn = document.getElementById("collapseBtn");
const collapseIcon = document.getElementById("collapseIcon");

if (collapseBtn && sidebar && collapseIcon) {
  collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    collapseIcon.textContent = sidebar.classList.contains("collapsed") ? "▶" : "◀";
  });
}

// Get logged-in user
async function getUser() {
  try {
    const response = await fetch("/.auth/me");
    const data = await response.json();

    const userInfo = document.getElementById("userInfo");
    const sidebarUser = document.getElementById("sidebarUser");

    if (data.clientPrincipal) {
      const userText = data.clientPrincipal.userDetails;

      if (userInfo) {
        userInfo.textContent = userText;
      }

      if (sidebarUser) {
        sidebarUser.textContent = userText;
      }
    }
  } catch (err) {
    console.error("User fetch failed", err);
  }
}

// Logout
function logout() {
  window.location.href = "/.auth/logout";
}

// Page navigation system
const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-page");

    if (!target) return;

    // Remove active states
    navItems.forEach(i => i.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    // Activate selected
    item.classList.add("active");

    const targetPage = document.getElementById(target);
    if (targetPage) {
      targetPage.classList.add("active");
    }
  });
});

// Run on load
window.addEventListener("load", getUser);
