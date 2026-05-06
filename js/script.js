// Typing Animation
var typed = new Typed(".typing", {
    strings: [
        "Sales Representative / Sales Officer",
        "Marketing Executive",
        "Production / Factory Worker"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Aside Nav Toggler
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");

    a.addEventListener("click", function () {

        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }

        for (let j = 0; j < totalNavList; j++) {
            const link = navList[j].querySelector("a");

            if (link.classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            link.classList.remove("active");
        }

        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

// Show Section
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

// Update Nav
function updateNav(element) {
    const target = element.getAttribute("href").split("#")[1];

    for (let i = 0; i < totalNavList; i++) {
        const link = navList[i].querySelector("a");

        link.classList.remove("active");

        if (target === link.getAttribute("href").split("#")[1]) {
            link.classList.add("active");
        }
    }
}

// Hire Me Button
document.addEventListener("click", function (e) {
    const btn = e.target.closest(".hire-me");

    if (btn) {
        e.preventDefault();

        showSection(btn);
        updateNav(btn);
    }
});

// Nav Toggler
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

// Toggle Function
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}