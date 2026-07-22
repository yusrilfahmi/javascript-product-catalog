import { keranjang } from "./keranjang.js";
export default function popup(products) {
  const tampilPopUp = document.createElement("section");
  tampilPopUp.className = "tampilPopUp";
  const centerPopUp = document.createElement("div");
  centerPopUp.className = "centerPopUp";
  const deskripsiPopUp = document.createElement("div");
  deskripsiPopUp.className = "deskripsiPopUp";
  const popUpAtas = document.createElement("div");
  popUpAtas.className = "popUpAtas";
  const popUpBawah = document.createElement("div");
  popUpBawah.className = "popUpBawah";
  const buttonAccept = document.createElement("button");
  buttonAccept.className = "buttonAccept";
  buttonAccept.textContent = "Lanjut Checkout";
  const buttonDenied = document.createElement("button");
  buttonDenied.className = "buttonDenied";
  buttonDenied.textContent = "Batalkan";
  const titlePopup = document.createElement("p");
  titlePopup.className = "titlePopup";
  titlePopup.textContent = `${products.title}`;
  const descriptionPopup = document.createElement("p");
  descriptionPopup.className = "descriptionPopup";
  descriptionPopup.textContent = `${products.description}`;
  const pricePopup = document.createElement("p");
  pricePopup.className = "pricePopup";
  pricePopup.textContent = `${products.price}`;
  const img = document.createElement("img");
  img.className = "img";
  img.src = `${products.images[0]}`;

  popUpAtas.appendChild(img);
  deskripsiPopUp.appendChild(titlePopup);
  deskripsiPopUp.appendChild(descriptionPopup);
  deskripsiPopUp.appendChild(pricePopup);
  popUpAtas.appendChild(deskripsiPopUp);
  popUpBawah.appendChild(buttonAccept);
  popUpBawah.appendChild(buttonDenied);
  centerPopUp.appendChild(popUpAtas);
  centerPopUp.appendChild(popUpBawah);
  tampilPopUp.appendChild(centerPopUp);
  document.body.appendChild(tampilPopUp);

  buttonDenied.onclick = () => tampilPopUp.remove();
  buttonAccept.onclick = () => {
    keranjang(products);
    // tambahTotal(products.price);
  };
}
