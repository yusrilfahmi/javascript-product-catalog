export function sort() {
  const navbar = document.querySelector(".navbar");
  const buttonKategori = document.querySelector(".buttonKategori");
  const arraySort = ["item termurah", "item termahal", "rating"];

  arraySort.forEach((element) => {
    const buttonSort = document.createElement("button");
    buttonSort.className = "arraySort";
    buttonSort.textContent = `${element}`;
    buttonKategori.before(buttonSort);
  });
}

export function getTermahal(callback) {
  const arraySort = document.querySelectorAll(".arraySort ");
  arraySort.forEach((elements) => {
    elements.addEventListener("click", () => {
      callback(elements.textContent);
    });
  });
}
