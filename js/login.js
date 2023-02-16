const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");

const validateInput = (event) => {
    const playerName = event.target.value;
    
    if (playerName.length > 2) {
        button.removeAttribute("disabled");
        return;
    }
    button.setAttribute("disabled", "");
}

const handleSubmit = (event) => {
    event.preventDefault();
    const playerName = input.value;
    
    localStorage.setItem("playerName", playerName);
    window.location = "./pages/game.html";
}

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);