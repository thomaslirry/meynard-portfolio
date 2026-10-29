const toggleButton = document.getElementById("theme-toggle");

// Restore the saved choice, if there is one
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleButton.textContent = "Light mode";
}

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleButton.textContent = "Light mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "Dark mode";
    localStorage.setItem("theme", "light");
  }
});