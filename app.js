async function getUser() {
  const response = await fetch("/.auth/me");
  const data = await response.json();

  if (data.clientPrincipal) {
    document.getElementById("user").innerText =
      "Logged in as: " + data.clientPrincipal.userDetails;
  } else {
    document.getElementById("user").innerText =
      "Not logged in";
  }
}
