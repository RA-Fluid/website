// Display an alert when the button is clicked
function greetUser() {
    alert("Hello! Welcome to my website!");
}

// Change the background color randomly
function changeBackgroundColor() {
    const colors = ["#f0f8ff", "#ffe4e1", "#f5f5dc", "#e6e6fa", "#fffacd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        greetUser();
        changeBackgroundColor();
    });
});
