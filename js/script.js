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

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("[data-page]");
    const mainTitle = document.getElementById("main-title");
    const mainContent = document.getElementById("main-content");

    const pages = {
        home: {
            title: "Willkommen auf meiner Homepage", content: "<p>Hier ist dein Startinhalt.</p>"
        },
        news: {
            title: "News", content: "<p>Hier stehen deine News.</p>"
        },
        galerie: {
            title: "Galerie",  content: "<p>Hier kommt deine Galerie rein.</p>"
        },
        kontakt: {
            title: "Kontakt", content: "<p>Hier ist dein Kontaktbereich.</p>"
        },
        extra1: {
            title: "Extra 1", content: "<p>Inhalt von Extra 1.</p>"
        },
        extra2: {
            title: "Extra 2", content: "<p>Inhalt von Extra 2.</p>"
        },
        extra3: {
            title: "Extra 3", content: "<p>Inhalt von Extra 3.</p>"
        }
    };

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const page = this.getAttribute("data-page");

            if (pages[page]) {
                mainTitle.textContent = pages[page].title;
                mainContent.innerHTML = pages[page].content;
            }

        });
    });
});

/* INPUT SECURITY FILTER */

const blockedChars = /[{}\[\]()#]/g;

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("input", function() {
        this.value = this.value.replace(blockedChars, "");
    });
});