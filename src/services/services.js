const strLimit = (string) => {
  return `${string.substring(0, 150)} [...] `;
};

const addToCart = (id, price) => {
  let cart = [];
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    if (cart.some((p) => p.id === id)) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
          cart[i].qty += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
    } else {
      cart.push({ id: id, price: price, qty: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  } else {
    cart.push({ id: id, price: price, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const removeFromCart = (id) => {
  let storageCart = JSON.parse(localStorage.getItem("cart"));
  let cart = storageCart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export default { strLimit, addToCart, removeFromCart };
