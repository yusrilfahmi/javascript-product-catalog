export default async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Url Laman non valid");
    }
    const { products } = await response.json();
    return products;
  } catch (error) {
    return error.message;
  }
}
