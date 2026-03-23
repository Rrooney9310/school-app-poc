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
  const sidebarUser = document.getElementById("sidebarUser");

  if (data.clientPrincipal) {
    const userText = data.clientPrincipal.userDetails;

    if (userInfo) {
      userInfo.textContent = `Logged in as: ${userText}`;
    }

    if (sidebarUser) {
      sidebarUser.textContent = userText;
    }
  } else {
    if (userInfo) {
      userInfo.textContent = "Not logged in";
    }

    if (sidebarUser) {
      sidebarUser.textContent = "Guest";
    }
  }
}

function logout() {
  window.location.href = "/.auth/logout";
}

window.addEventListener("load", getUser);
