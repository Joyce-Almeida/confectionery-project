/** @format */

function greatJob() {
  let name = prompt("What is your name?");
  let like = prompt("Do you like confectionery?");

  if (like === "yes") {
    prompt("Awsome! What is your email address?");
    alert("🧁 " + name + "! Wellcome to Confectionery Club! 🍰");
  } else {
    if (like === "no") {
      alert("Oh, no " + name + "! This is so sad! 😭");
    }
  }
}
let joinButton = document.querySelector("button");
joinButton.addEventListener("click", greatJob);
