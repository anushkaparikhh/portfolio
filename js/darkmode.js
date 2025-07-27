let themeToggle = document.querySelector(".theme-toggle");

if (localStorage.getItem("dark") === "on") {
    document.body.classList.toggle("dark-theme");
    themeToggle.innerHTML = "LIGHTS ON";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (themeToggle.innerHTML === "LIGHTS OFF") {
        localStorage.setItem("dark", "on");
        themeToggle.innerHTML = "LIGHTS ON";
    } else {
        localStorage.setItem("dark", "off");
        themeToggle.innerHTML = "LIGHTS OFF";
    }
});