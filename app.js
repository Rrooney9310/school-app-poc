const sidebar = document.getElementById("sidebar");
const collapseBtn = document.getElementById("collapseBtn");
const collapseIcon = document.getElementById("collapseIcon");

if (collapseBtn && sidebar && collapseIcon) {
  collapseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    collapseIcon.textContent = sidebar.classList.contains("collapsed") ? "▶" : "◀";
  });
}

async function getUser() {
  const response = await fetch("/.auth/me");
  const data = await response.json();

  const userInfo = document.getElementById("userInfo");

  if (userInfo) {
    if (data.clientPrincipal) {
      userInfo.textContent = `Logged in as: ${data.clientPrincipal.userDetails}`;
    } else {
      userInfo.textContent = "Not logged in";
    }
  }
}

function logout() {
  window.location.href = "/.auth/logout";
}

window.addEventListener("load", getUser);
