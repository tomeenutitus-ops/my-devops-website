const year = document.getElementById("year");
const message = document.getElementById("message");
const changeMessage = document.getElementById("changeMessage");

year.textContent = new Date().getFullYear();

changeMessage.addEventListener("click", () => {
  message.textContent = "Great! You changed the website using JavaScript. This is the kind of update we will later deploy through CI/CD.";
});
