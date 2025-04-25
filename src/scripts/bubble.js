// Bubble Popping + SFX JS
const bubbles = document.querySelectorAll(
    ".bubble1, .bubble2, .bubble3, .bubble4, .bubble5, .bubble6, .bubble7, .bubble8, .bubble9, .bubble10"
);

// Detect user's browser
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Plays the sound only if its not Chrome or Safari
const playSound = !(isChrome || isSafari);

// SFX List
const popSounds = [
    new Audio("build/dist/audio/pop1.mp3"),
    new Audio("build/dist/audio/pop2.mp3"),
    new Audio("build/dist/audio/pop3.mp3")
];

bubbles.forEach(function(bubble) {
    bubble.addEventListener("click", function() {
        // SFX if allowed
        if (playSound) {
            const randomPop = popSounds[Math.floor(Math.random() * popSounds.length)];
            const clonedSound = randomPop.cloneNode();
            clonedSound.play();
        }

        // Pops the bubble
        bubble.classList.add("explode");

        // Vanish Bubble
        setTimeout(() => {
            bubble.style.opacity = "0";
            bubble.style.pointerEvents = "none";
        }, 1000);

        // Respawn Bubble
        setTimeout(() => {
            bubble.classList.remove("explode");
            bubble.style.opacity = "0.9";
            bubble.style.pointerEvents = "auto";
        }, 3000);
    });
});
