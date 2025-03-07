// etape 4
const citationInput = document.getElementById("citation");
const authorInput = document.getElementById("author-name");
const submitButton = document.getElementById("submit-button");
const quoteList = document.getElementById("quote-list");

submitButton.addEventListener("click", () => {
  //j'appelle la const submitButton après l'avoir récupéré via le getElementById
  const text = citationInput.value;
  const author = authorInput.value;

  addQuotes(text, author); //fin étape 5 avec paramettres des input

  //   alert(`citation : ${text} nom de l'auteur: ${author}`); //redemander à clémentine pour le pas à pas dans le debugger
  //   alert("nom de l'auteur: " + author); //concatener (+) et pas mettre une virgule sinon plusieurs arguments
});

function addQuotes(quote, author) {
  const newQuote = document.createElement("p"); //On cree l'element <p>
  newQuote.className = "text"; //on lui donne la class "text"
  newQuote.innerHTML = quote; // on lui donne la valeur de quote

  const newAuthor = document.createElement("p");
  newAuthor.className = "author";
  newAuthor.innerHTML = author;

  const newDiv = document.createElement("div");
  newDiv.className = "quote";

  newDiv.appendChild(newQuote); // on ajoute nweQuote dans la nouvelle div
  newDiv.appendChild(newAuthor); // on ajoute l'element crée <p class author"> dans la nouvelle div

  quoteList.appendChild(newDiv); //on met le tout dans la div qote list du html
}
