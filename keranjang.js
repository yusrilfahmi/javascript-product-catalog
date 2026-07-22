let keranjangCheckout = [];
let total = 0;
const dbLocalStorage = localStorage.getItem("keranjangCheckOut");
if (dbLocalStorage) {
  const parseDbLocalStorage = JSON.parse(dbLocalStorage);
  keranjangCheckout.push(...parseDbLocalStorage);
}
hitungTotal();
function hitungTotal() {
  total = 0;
  const arrayTotal = keranjangCheckout.reduce((total, recent) => {
    return total + recent.price * recent.qtyCheckOut;
  }, 0);
  total += arrayTotal;
}

const navbar = document.querySelector(".navbar");
const buttonSearch = await document.querySelector(".buttonSearch");
const buttonCheckout = document.createElement("button");
buttonCheckout.className = "buttonCheckout";
buttonCheckout.textContent = `🧺 ${keranjangCheckout.length} $${Math.abs(total.toFixed(2))}`;
const totalCheckOut = document.createElement("p");
totalCheckOut.className = "totalCheckOut";
setTimeout(() => navbar.appendChild(buttonCheckout), 150);

buttonCheckout.onclick = () => popUpBelanja(keranjangCheckout);
export function keranjang(products) {
  const adaBarang = keranjangCheckout.find(
    (elements) => elements.id == products.id,
  );
  if (adaBarang) {
    adaBarang.qtyCheckOut++;
  } else {
    const productsBaru = {
      ...products,
      qtyCheckOut: 1,
    };
    keranjangCheckout.push(productsBaru);
  }
  localStorage.setItem("keranjangCheckOut", JSON.stringify(keranjangCheckout));

  const tampilPopUp = document.querySelector(".tampilPopUp");
  tampilPopUp.remove();
  hitungTotal();
  buttonCheckout.textContent = `🧺 ${keranjangCheckout.length} $${Math.abs(total.toFixed(2))}`;
}

function popUpBelanja(keranjangCheckout) {
  const backgroundPopUpCheckOut = document.createElement("section");
  backgroundPopUpCheckOut.className = "backgroundPopUpCheckOut";
  const PopUpCheckOut = document.createElement("div");
  PopUpCheckOut.className = "PopUpCheckOut";

  keranjangCheckout.forEach((element) => {
    const qtyCheckOut = document.createElement("p");
    qtyCheckOut.className = "qtyCheckOut";
    qtyCheckOut.textContent = `${element.qtyCheckOut}`;
    const qtyAdd = document.createElement("button");
    qtyAdd.className = "qtyAdd";
    qtyAdd.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

`;
    const qtyDel = document.createElement("button");
    qtyDel.className = "qtyDel";
    qtyDel.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

`;
    const itemCheckOut = document.createElement("div");
    itemCheckOut.className = "itemCheckOut";
    const setQty = document.createElement("div");
    setQty.className = "setQty";
    const imgDescCheckOut = document.createElement("div");
    imgDescCheckOut.className = "imgDescCheckOut";
    const deskripsiCheckOut = document.createElement("div");
    deskripsiCheckOut.className = "deskripsiCheckOut";
    const judulItem = document.createElement("p");
    judulItem.className = "judulItem";
    judulItem.textContent = `${element.title}`;
    const btnHapusItem = document.createElement("button");
    btnHapusItem.className = "btnHapusItem";
    btnHapusItem.textContent = `X`;
    const priceItem = document.createElement("p");
    priceItem.className = "priceItem";
    priceItem.textContent = `${element.price}`;
    const imgItem = document.createElement("img");
    imgItem.className = "imgItem";
    imgItem.src = `${element.images[0]}`;
    deskripsiCheckOut.appendChild(judulItem);
    deskripsiCheckOut.appendChild(priceItem);
    imgDescCheckOut.appendChild(imgItem);
    imgDescCheckOut.appendChild(deskripsiCheckOut);
    itemCheckOut.appendChild(imgDescCheckOut);
    setQty.appendChild(qtyDel);
    setQty.appendChild(qtyCheckOut);
    setQty.appendChild(qtyAdd);
    itemCheckOut.appendChild(setQty);
    itemCheckOut.appendChild(btnHapusItem);
    PopUpCheckOut.appendChild(itemCheckOut);

    btnHapusItem.onclick = () => {
      hapusItem(element);
      backgroundPopUpCheckOut.remove();
    };
    qtyAdd.onclick = () => {
      aturQtyAdd(element);
      backgroundPopUpCheckOut.remove();
    };
    qtyDel.onclick = () => {
      aturQtyDel(element);
      backgroundPopUpCheckOut.remove();
    };
  });
  const confirmCheckOut = document.createElement("div");
  confirmCheckOut.className = "confirmCheckOut";
  const btnConfirmCheckOut = document.createElement("button");
  btnConfirmCheckOut.className = "btnConfirmCheckOut";
  btnConfirmCheckOut.textContent = "Konfirmasi";
  totalCheckOut.textContent = `Total $${Math.abs(total.toFixed(2))}`;
  const closeCheckOut = document.createElement("p");
  closeCheckOut.className = "closeCheckOut";
  closeCheckOut.textContent = `X`;

  confirmCheckOut.appendChild(totalCheckOut);
  confirmCheckOut.appendChild(btnConfirmCheckOut);
  PopUpCheckOut.appendChild(confirmCheckOut);
  PopUpCheckOut.appendChild(closeCheckOut);
  backgroundPopUpCheckOut.appendChild(PopUpCheckOut);
  document.body.appendChild(backgroundPopUpCheckOut);

  closeCheckOut.onclick = () => backgroundPopUpCheckOut.remove();
  btnConfirmCheckOut.onclick = () => confirmPembelian(keranjangCheckout);
}

function hapusItem(element) {
  // let parseDbLocalStorage = JSON.parse(dbLocalStorage);
  keranjangCheckout = keranjangCheckout.filter(
    (data) => data.title != element.title,
  );
  localStorage.setItem("keranjangCheckOut", JSON.stringify(keranjangCheckout));
  hitungTotal();
  popUpBelanja(keranjangCheckout);
  buttonCheckout.textContent = `🧺 ${keranjangCheckout.length} $${Math.abs(total.toFixed(2))}`;
}

function aturQtyAdd(elements) {
  elements.qtyCheckOut++;
  localStorage.setItem("keranjangCheckOut", JSON.stringify(keranjangCheckout));
  hitungTotal();
  popUpBelanja(keranjangCheckout);
}
function aturQtyDel(elements) {
  if (elements.qtyCheckOut == 1) {
    keranjangCheckout = keranjangCheckout.filter(
      (data) => data.title != elements.title,
    );
  } else {
    elements.qtyCheckOut--;
  }
  localStorage.setItem("keranjangCheckOut", JSON.stringify(keranjangCheckout));
  hitungTotal();
  popUpBelanja(keranjangCheckout);
  buttonCheckout.textContent = `🧺 ${keranjangCheckout.length} $${Math.abs(total.toFixed(2))}`;
}
function confirmPembelian() {
  const tampilkanCheckOutBerhasil = document.createElement("div");
  tampilkanCheckOutBerhasil.className = "tampilkanCheckOutBerhasil";
  const popUpCheckOutBerhasil = document.createElement("div");
  popUpCheckOutBerhasil.className = "popUpCheckOutBerhasil";
  const svgImgCheckOut = document.createElement("object");
  svgImgCheckOut.className = "svgImgCheckOut";
  svgImgCheckOut.innerHTML = `<svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
        clip-rule="evenodd"
      />
    </svg>`;

  const textCheckOutBerhasil = document.createElement("p");
  textCheckOutBerhasil.className = "textCheckOutBerhasil";
  textCheckOutBerhasil.textContent = "Checkout Berhasil";
  popUpCheckOutBerhasil.appendChild(svgImgCheckOut);
  popUpCheckOutBerhasil.appendChild(textCheckOutBerhasil);
  tampilkanCheckOutBerhasil.appendChild(popUpCheckOutBerhasil);
  document.body.appendChild(tampilkanCheckOutBerhasil);

  keranjangCheckout = [];
  localStorage.setItem("keranjangCheckOut", JSON.stringify(keranjangCheckout));

  const backgroundPopUpCheckOut = document.querySelector(
    ".backgroundPopUpCheckOut",
  );
  backgroundPopUpCheckOut.remove();
  setTimeout(() => tampilkanCheckOutBerhasil.remove(), 1000);
  hitungTotal();
  buttonCheckout.textContent = `🧺 ${keranjangCheckout.length} $${Math.abs(total.toFixed(2))}`;
}
