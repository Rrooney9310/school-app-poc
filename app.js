async function test() {
  const response = await fetch("/.auth/me");
  const data = await response.json();

  if (data.clientPrincipal) {
    document.getElementById("output").innerText =
      "Logged in as: " + data.clientPrincipal.userDetails;
  } else {
    document.getElementById("output").innerText =
      "Not logged in";
  }
}
