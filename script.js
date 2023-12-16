// Récupération des différents éléments
const btn = document.querySelector("#roll__btn");
const dice = document.querySelector("#dice");
const rollHistory = document.querySelector("#roll__history");

// Création de la variable historyList qui va stoker les résultats du lancée de dé dans un tableau
let historyList = [];

// Déclaration de la fonction rollDice qui va pemettre de lancer le dé
const rollDice = () => {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult); // Appel de la fonction getDiceFace
  dice.innerHTML = diceFace;
  // insertion du résultat du lancée de dé dans le tableau historyList
  historyList.push(rollResult);
  // Appel de la fonctionupdateRollHistory
  updateRollHistory();
};

// Déclaration de la fonction updateRollHistory qui va permettre de faire une liste des résultats
const updateRollHistory = () => {
  rollHistory.textContent = "";
  // Boucle for qui va parcourir le tableau historyList
  for (let i = 0; i < historyList.length; i++) {
    // Création et insertion de l'élément <li> dans le DOM
    const listItem = document.createElement("li");
    listItem.innerHTML = `Lancer ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistory.appendChild(listItem);
  }
};

// Déclaration de la fonction getDiceFace qui va afficher la face sur laquelle le dé est tombé
const getDiceFace = (rollResult) => {
  // L'instruction switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
};

// Ecoute de l'événement "click" sur le bouton "Lancer le dé"
btn.addEventListener("click", () => {
  dice.classList.add("roll__animation");
  // La méthode globale setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
  setTimeout(() => {
    dice.classList.remove("roll__animation");
    // Appel de la fonction rollDice
    rollDice();
  }, 1000);
});
