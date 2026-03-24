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
const topbarUser = document.getElementById("topbarUser");

    if (data.clientPrincipal) {
      const userText = data.clientPrincipal.userDetails;

      if (userInfo) {
        userInfo.textContent = userText;
      }

  if (sidebarUser) {
  sidebarUser.textContent = userText;
}

if (topbarUser) {
  topbarUser.textContent = userText;
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
const topbarTitle = document.querySelector(".topbar-title");
const topbarSubtitle = document.querySelector(".topbar-subtitle");

const pageMeta = {
  dashboardPage: {
    title: "Dashboard",
    subtitle: "Overview of key areas in STAMP"
  },
  spbPage: {
    title: "SPB Database",
    subtitle: "Student planning and tracking tools"
  },
  assessmentPage: {
    title: "BGE Assessment",
    subtitle: "Assessment overview and pilot faculty tools"
  },
  performancePage: {
    title: "PE Performance",
    subtitle: "Performance tracking and feedback"
  },
  settingsPage: {
    title: "School Settings",
    subtitle: "Manage staffing, students and departments"
  },
  analyticsPage: {
    title: "Analytics",
    subtitle: "View trends, patterns and key measures"
  }
};

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-page");

    if (!target) return;

    navItems.forEach(i => i.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    item.classList.add("active");

    const targetPage = document.getElementById(target);
    if (targetPage) {
      targetPage.classList.add("active");
    }

    if (pageMeta[target]) {
      if (topbarTitle) topbarTitle.textContent = pageMeta[target].title;
      if (topbarSubtitle) topbarSubtitle.textContent = pageMeta[target].subtitle;
    }
  });
});;

// Run on load
window.addEventListener("load", getUser);
