// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Keep Dark Mode Enabled if Previously Set
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Navigate to Notes Page Based on Selected Branch
function goToNotes(branch) {
    window.location.href = `notes.html?branch=${branch}`;
}
