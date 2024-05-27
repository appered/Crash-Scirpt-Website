document.addEventListener("DOMContentLoaded", () => {
    const fallingTextContainer = document.querySelector('.falling-text');
    const words = ["Crasher", "Script"];

    function createFallingText() {
        words.forEach((word, index) => {
            const textElement = document.createElement('div');
            textElement.textContent = word;
            textElement.style.animationDelay = `${index * 2}s`;
            fallingTextContainer.appendChild(textElement);
        });
    }

    createFallingText();

    document.querySelector('.copy-button').addEventListener('click', () => {
        const scriptText = `loadstring(game:HttpGet("https://raw.githubusercontent.com/toyota93/crash-script/main/script.txt"))()`;
        navigator.clipboard.writeText(scriptText).then(() => {
            alert('Script copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });
});
