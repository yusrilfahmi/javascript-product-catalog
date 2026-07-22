import fetchProducts from "./productApi.js";
import showProductSummary from "./productSummary.js";
import katalog from "./katalog.js";
import popup from "./popup.js";
import injectSearch from "./search.js";
import { searchValue } from "./search.js";
import injectKategori from "./kategori.js";
import { getKategori } from "./kategori.js";
import { sort, getTermahal } from "./sort.js";
async function main() {
  try {
    const products = await fetchProducts();
    injectSearch();
    const kategori = products.map((element) => element.category);
    const uniqKategori = [...new Set(kategori)];
    injectKategori(uniqKategori);
    sort();
    let dataKatalog = katalog(products);
    document.body.appendChild(dataKatalog);

    searchValue((value) => {
      const bungkusKatalog = document.querySelector(".bungkusKatalog");
      bungkusKatalog.innerHTML = "";

      const produk = products.filter((element) =>
        element.title.toLowerCase().includes(value.toLowerCase()),
      );
      dataKatalog = katalog(produk);
      document.body.appendChild(dataKatalog);
    });

    getKategori((value) => {
      const bungkusKatalog = document.querySelector(".bungkusKatalog");
      bungkusKatalog.innerHTML = "";

      const produk = products.filter(
        (element) => element.category.toLowerCase() === value.toLowerCase(),
      );
      dataKatalog = katalog(produk);
      document.body.appendChild(dataKatalog);
    });

    getTermahal((value) => {
      switch (value) {
        case "item termahal":
          let bungkusKatalog = document.querySelector(".bungkusKatalog");
          bungkusKatalog.innerHTML = "";

          let produk = products.sort((a, b) => b.price - a.price);
          dataKatalog = katalog(produk);
          document.body.appendChild(dataKatalog);
          break;
        case "item termurah":
          let bungkusKatalog2 = document.querySelector(".bungkusKatalog");
          bungkusKatalog2.innerHTML = "";

          let produk2 = products.sort((a, b) => a.price - b.price);
          dataKatalog = katalog(produk2);
          document.body.appendChild(dataKatalog);
          break;
        case "rating":
          let bungkusKatalog3 = document.querySelector(".bungkusKatalog");
          bungkusKatalog3.innerHTML = "";

          let produk3 = products.sort((a, b) => b.rating - a.rating);
          dataKatalog = katalog(produk3);
          document.body.appendChild(dataKatalog);
          break;

        default:
          break;
      }
    });

  } catch (error) {
    console.error(error.message);
  }
}

main();
