// Bubble Popping + SFX JS
const bubbles = document.querySelectorAll(
    ".bubble1, .bubble2, .bubble3, .bubble4, .bubble5, .bubble6, .bubble7, .bubble8, .bubble9, .bubble10"
);

// SFX List
const popSounds = [
    new Audio("build/dist/audio/pop1.mp3"),
    new Audio("build/dist/audio/pop2.mp3"),
    new Audio("build/dist/audio/pop3.mp3")
];

bubbles.forEach(function(bubble) {
    bubble.addEventListener("click", function() {
        // Choosing a sound randomly
        const randomPop = popSounds[Math.floor(Math.random() * popSounds.length)];
        const clonedSound = randomPop.cloneNode(); // Allow multiple SFXs to play at once
        clonedSound.play();

        // Pops Bubble
        bubble.classList.add("explode");

        // Bubble becomes invisible and with no interaction
        setTimeout(() => {
            bubble.style.opacity = "0";
            bubble.style.pointerEvents = "none";
        }, 1000);

        // Bubble respawns slowly
        setTimeout(() => {
            bubble.classList.remove("explode");
            bubble.style.opacity = "0.9";
            bubble.style.pointerEvents = "auto";
        }, 3000);
    });
});
