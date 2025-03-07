// etape 4
const citationInput = document.getElementById("citation");
const authorInput = document.getElementById("author-name");
const submitButton = document.getElementById("submit-button");



submitButton.addEventListener("click", () => { //j'appelle la const submitButton après l'avoir récupéré via le getElementById
  const text = citationInput.value;
  const author = authorInput.value;

  alert(`citation : ${text} nom de l'auteur: ${author}`); //redemander à clémentine pour le pas à pas dans le debugger
  alert("nom de l'auteur: " + author); //concatener (+) et pas mettre une virgule sinon plusieurs arguments 
});

function addQuotes(quote, authorNew) {
    const newQuote = document.createElement("p"); //On cree l'element <p>
    newQuote.className("text"); //on lui donne la class "text"
    newQuote.innerHTML = quote; // on lui donne la valeur de quote

    const newAuthor = document.createElement("p");
    newAuthor.setAttribute("class","author"); // Une autre façon d'attribuer la class ?
    newAuthor.innerHTML = authorNew;

    const newDiv = document.createElement("div");
    newDiv.className("quote"); // il y avait aussi classList.add mais j'ai lu sur stackOverflow que c'était plus valable pour I9

    newDiv.appendChild(newQuote); // on ajoute nweQuote dans la div
    newDiv.appendChild(newAuthor); // on ajoute l'element crée <p class author"> dans la div

    document.getElementById
}

