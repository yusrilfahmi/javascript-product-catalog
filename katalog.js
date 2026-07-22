import popup from "./popup.js";

export default function katalog(products) {
  const bungkusKatalog = document.querySelector(".bungkusKatalog");
  const button = document.querySelector(".button");
  products.forEach((element) => {
    const katalog = document.createElement("div");
    katalog.className = "katalog";
    const namaProduk = document.createElement("p");
    namaProduk.className = "namaProduk";
    namaProduk.textContent = `${element.title}`;
    const namaKategori = document.createElement("p");
    namaKategori.className = "namaKategori";
    namaKategori.textContent = `${element.category}`;
    const harga = document.createElement("p");
    harga.className = "harga";
    harga.textContent = `${element.price}`;
    const rating = document.createElement("p");
    rating.className = "rating";
    rating.textContent = `${element.rating}`;
    const img = document.createElement("img");
    img.className = "img";
    img.src = `${element.images[0]}`;
    const button = document.createElement("button");
    button.className = "btnCheckOut";
    button.textContent = "Check Out";
    const availableStatus = document.createElement("p");
    availableStatus.className = "availableStatus";
    availableStatus.textContent = `${element.availabilityStatus}`;

    katalog.appendChild(img);
    katalog.appendChild(namaProduk);
    katalog.appendChild(namaKategori);
    katalog.appendChild(rating);
    katalog.appendChild(harga);
    katalog.appendChild(availableStatus);
    katalog.appendChild(button);
    bungkusKatalog.appendChild(katalog);

    button.onclick = () => popup(element);
  });
  return bungkusKatalog;
}
