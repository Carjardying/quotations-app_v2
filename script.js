// etape 4
const citationInput = document.getElementById("citation");
const authorInput = document.getElementById("author-name");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => { //j'appelle la const submitButton après l'avoir récupéré via le getElementById
  const text = citationInput.value;
  const author = authorInput.value;

  console.log("citation : ", text);
  console.log("nom de l'auteur: " , author);
});
