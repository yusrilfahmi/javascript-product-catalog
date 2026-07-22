export default function showProductSummary(products) {
  const jumlahProduk = products.length;
  const averagePrice =
    products.reduce((total, currentValue) => total + currentValue.price, 0) /
    jumlahProduk;
  const produkTermahal = products.reduce((total, currentValue) =>
    currentValue.price > total.price ? currentValue : total,
  );
  const produkTermurah = products.reduce((total, currentValue) =>
    total.price > currentValue.price ? currentValue : total,
  );

  const totalStock = products.reduce(
    (total, currentValue) => total + currentValue.stock,
    0,
  );
  console.log(`Jumlah produk : ${jumlahProduk}`);
  console.log(`Rata-rata harga : ${averagePrice.toFixed(2)}`);
  console.log(
    `Produk Termahal : ${produkTermahal.title} dengan harga $${produkTermahal.price}`,
  );
  console.log(
    `Produk Termurah : ${produkTermurah.title} dengan harga $${produkTermurah.price}`,
  );
  console.log(`Total Stock : ${totalStock}`);
}