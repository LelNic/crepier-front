const strLimit = (string) => {
  return `${string.substring(0, 150)} [...] `;
};

const addToCart = (id, price) => {
  let products = [];
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  }
  products.push({ productsId: id, price: price });
  localStorage.setItem("products", JSON.stringify(products));
};

const removeFromCart = (id) => {
  let storageProducts = JSON.parse(localStorage.getItem("products"));
  let products = storageProducts.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
};

export default { strLimit, addToCart, removeFromCart };
