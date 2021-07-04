const buttonSelector = document.getElementById("button");
const joke = document.getElementById("joke");

async function getJoke() {
  await axios
    .get("https://icanhazdadjoke.com/slack", {
      Accept: "application/json",
    })
    .then((data) => {
      console.log(data.data.attachments);
      joke.innerHTML = data.data.attachments[0].fallback;
    });
}
buttonSelector.addEventListener("click", function () {
  getJoke();
});
