const grid = document.querySelector(".grid");

const characters = [
    "beth",
    "jerry",
    "jessica",
    "morty",
    "pessoa-passaro",
    "pickle-rick",
    "rick",
    "summer",
    "meeseeks",
    "scroopy"
]

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll(".disabled-card");

    if (disabledCards.length == 20) {
        setTimeout(() => {
            alert("Congrats! You found all the cards!");
        }, 500);
    }
}

const compareCards = () => {
    const firstCharacter = firstCard.getAttribute("data-character");
    const secondCharacter = secondCard.getAttribute("data-character");

    if (firstCharacter == secondCharacter) {
        firstCard.firstChild.classList.add("disabled-card");
        secondCard.firstChild.classList.add("disabled-card");

        firstCard = '';
        secondCard = '';
        checkEndGame();
    } 
    else {
        setTimeout(() => {
            firstCard.classList.remove("reveal-card");
            secondCard.classList.remove("reveal-card");

            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

const revealCard = ({target}) => {
    const parentNode = target.parentNode;

    if (parentNode.className.includes("reveal-card")) {
        return;
    }

    if (firstCard == "") {
        parentNode.classList.add("reveal-card");
        firstCard = parentNode;
    }
    else if (secondCard == "") {
        parentNode.classList.add("reveal-card");
        secondCard = parentNode;
        compareCards();
    }
}

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (character) => {
    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url(../images/${character}.png)`;

    card.setAttribute("data-character", character);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard);

    return card;
}

const loadGame = () => {
    const duplicateCharacters = [...characters, ...characters];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();