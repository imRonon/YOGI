window.addEventListener("DOMContentLoaded", () => {
    const fath = document.querySelector(".fath");
    setTimeout(() => {
        fath.style.opacity = "0";
        fath.style.transition = "all 0.4s linear";
        setTimeout(() => {
            fath.style.display = "none";
        }, 400);
    }, 3000);
});
