window.addEventListener("DOMContentLoaded", () => {
    const heart = document.getElementById("heart");
    const thx = document.getElementById("thx");
    const change = function () {
        if (heart.classList.contains("outline")) {
            heart.classList.remove("outline");
            heart.classList.add("dislike");
            thx.textContent = ":(((";
        } else {
            heart.classList.remove("dislike");
            heart.classList.add("outline");
            thx.textContent = "Thank You!";
        }
    };

    heart.addEventListener("click", change);
});
