export default function injectSearch() {
  const navbar = document.querySelector(".navbar");
  const search = document.createElement("input");
  search.type = "text";
  search.placeholder = "Input pencarianmu disini";
  search.className = "search";
  const buttonSearch = document.createElement("button");
  buttonSearch.className = "buttonSearch";
  buttonSearch.textContent = "🔎";
  navbar.appendChild(search);
  navbar.appendChild(buttonSearch);
}

export function searchValue(callback) {
  const search = document.querySelector(".search");
  const buttonSearch = document.querySelector(".buttonSearch");
  search.addEventListener("input", () => {
    const value = search.value;
    callback(value);
  });
}
