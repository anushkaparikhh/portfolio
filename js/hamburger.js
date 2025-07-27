let hamburger = document.querySelector(".hamburger");
let index = document.querySelector(".index-wrapper");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    index.classList.toggle("index-wrapper_active");
});

document.querySelectorAll(".index-item").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("hamburger_active");
    index.classList.remove("index-wrapper_active");
}))