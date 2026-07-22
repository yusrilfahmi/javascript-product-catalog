export default function injectKategori(dataKategori) {
  const navbar = document.querySelector(".navbar");
  const pencarian = document.querySelector(".search");
  dataKategori.forEach((element) => {
    const buttonKategori = document.createElement("button");
    buttonKategori.className = `buttonKategori`;
    buttonKategori.textContent = `${element}`;
    pencarian.before(buttonKategori);
  });
}

export function getKategori(callback) {
  const buttonKategori = document.querySelectorAll(".buttonKategori ");
  buttonKategori.forEach((elements) => {
    elements.addEventListener("click", () => {
      callback(elements.textContent);
    });
  });
}
