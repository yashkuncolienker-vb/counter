const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");
const display = document.querySelector("#display");
const expand = document.querySelector("#expand");
const cardBody = document.querySelector("#card .card-body");

plus.addEventListener("click", () => {
  display.textContent++;
});

minus.addEventListener("click", () => {
  if (+display.textContent > 0) {
    display.textContent--;
  }
});

reset.addEventListener("click", () => {
  display.textContent = 0;
});

// To toggle counter bar
expand.addEventListener("click", () => {
  if (cardBody.style.display === "none") {
    cardBody.style.display = "block";
  } else {
    cardBody.style.display = "none";
  }
});
