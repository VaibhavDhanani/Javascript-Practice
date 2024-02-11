window.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[id="${e.key.toUpperCase()}"]`);
    let key = document.querySelector(`div[id="${e.key.toUpperCase()}"]`);
    console.log(e.key);
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
});

const keys = document.querySelectorAll(".key");
keys.forEach(element => {
    element.addEventListener("transitionend", (e) => {
        if (e.propertyName !== "transform") return; // Skip if it's not a transform transition
        e.target.classList.remove("playing");
    });
});
