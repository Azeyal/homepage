/*shoutbox*/
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".toggle-btn");
    const box = document.getElementById("shoutbox-content");

    if (btn && box) {
        btn.addEventListener("click", function() {
            box.classList.toggle("open");
        });
    }
});

/*profil button*/
const profileToggle = document.getElementById("profileToggle");
const settingsPanel = document.getElementById("settingsPanel");

if (profileToggle && settingsPanel) {
    profileToggle.addEventListener("click", function() {
        settingsPanel.classList.toggle("open");
    });
}