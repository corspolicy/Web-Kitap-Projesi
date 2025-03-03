document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items-container");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function addToCart(event) {
    const productContainer = event.target.closest(".img-container");
    const productName = productContainer.querySelector("h2").textContent;
    const productPrice = parseFloat(
      productContainer.querySelector("h1").textContent.replace("₺", "").trim()
    );
    const productImage = productContainer.querySelector("img").src;

    const existingProductIndex = cart.findIndex(
      (item) => item.name === productName
    );

    if (existingProductIndex !== -1) {
      alert(`${productName} kitabını zaten sepete ekledin!`);
    } else {
      const product = {
        name: productName,
        price: productPrice,
        image: productImage,
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${productName} kitabı sepete eklendi!`);
    }

    renderCart();
  }

  function renderCart() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
            <h3>${item.name}</h3>
            <p>${item.price} ₺</p>
        </div>
        <button onclick="removeFromCart(${index})">Listeden Çıkar</button>
      `;

      cartItemsContainer.appendChild(cartItem);

      total += item.price;
    });

    const totalElement = document.createElement("div");
    totalElement.classList.add("total-price");
    totalElement.innerHTML = `<h3>Toplam Tutar: ${total.toFixed(2)} ₺</h3>`;

    cartItemsContainer.appendChild(totalElement);
  }

  window.removeFromCart = function (index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  if (cartItemsContainer) {
    renderCart();
  }

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });
});
