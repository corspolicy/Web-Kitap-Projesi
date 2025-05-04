document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items-container");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const productContainers = document.querySelectorAll(".img-container");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function animateElement(element, animation, duration = 800) {
    element.style.animation = `${animation} ${duration}ms ease`;
    element.addEventListener("animationend", () => {
      element.style.animation = "";
    }, { once: true });
  }

  function addToCart(event) {
    const productContainer = event.target.closest(".img-container");
    const productName = productContainer.querySelector("h2").textContent;
    const productAuthor = productContainer.querySelector("h4").textContent;
    const productPrice = Number.parseFloat(productContainer.querySelector("h1").textContent.replace("TL", "").trim());
    const productImage = productContainer.querySelector("img").src;

    const existingProductIndex = cart.findIndex((item) => item.name === productName);

    if (existingProductIndex !== -1) {
      const button = event.target;
      button.textContent = "Zaten Sepette";
      button.style.background = "linear-gradient(135deg, #64748b, #475569)";
      
      setTimeout(() => {
        button.textContent = "Sepete Ekle";
        button.style.background = "linear-gradient(135deg, #3b82f6, #1d4ed8)";
      }, 2000);
    } else {
      const product = {
        name: productName,
        author: productAuthor,
        price: productPrice,
        image: productImage,
      };

      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      const button = event.target;
      button.textContent = "Sepete Eklendi";
      button.style.background = "linear-gradient(135deg, #22c55e, #16a34a)";
      
      animateElement(productContainer, "pulse", 500);
      
      setTimeout(() => {
        button.textContent = "Sepete Ekle";
        button.style.background = "linear-gradient(135deg, #3b82f6, #1d4ed8)";
      }, 2000);
    }

    renderCart();
  }

  function renderCart() {
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div style="padding: 40px 20px; text-align: center;">
          <i class="fa fa-shopping-cart" style="font-size: 3rem; color: #64748b; margin-bottom: 20px;"></i>
          <h3 style="color: #f8fafc; font-size: 1.2rem; margin-bottom: 10px;">Sepetiniz Boş</h3>
          <p style="color: #94a3b8; font-size: 0.9rem;">Sepetinize ürün eklemek için alışverişe devam edin.</p>
          <a href="index.html" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; text-decoration: none; border-radius: 8px; font-size: 0.9rem;">
            Alışverişe Devam Et
          </a>
        </div>
      `;
      return;
    }
    
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
            <h3>${item.name}</h3>
            <p>${item.price} TL</p>
        </div>
        <button class="remove-item" data-index="${index}">Kaldır</button>
      `;

      cartItemsContainer.appendChild(cartItem);
      total += item.price;
      
      animateElement(cartItem, "fadeIn", 300 + index * 100);
    });

    const totalElement = document.createElement("div");
    totalElement.classList.add("total-price");
    totalElement.innerHTML = `
      <h3>Toplam Tutar: ${total.toFixed(2)} TL</h3>
      <button style="margin-top: 15px; padding: 12px 25px; background: linear-gradient(135deg, #22c55e, #16a34a); color: white; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; transition: all 0.3s ease;">
        Siparişi Tamamla
      </button>
    `;

    cartItemsContainer.appendChild(totalElement);
    
    document.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", function() {
        const index = parseInt(this.getAttribute("data-index"));
        removeFromCart(index);
      });
    });
  }

  function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  function animateOnScroll() {
    const elements = document.querySelectorAll(".img-container");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(element);
    });
  }

  if (cartItemsContainer) {
    renderCart();
  }

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addToCart);
  });

  animateOnScroll();

  const searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const searchTerm = this.value.toLowerCase();
      const products = document.querySelectorAll(".img-container");
      
      products.forEach(product => {
        const title = product.querySelector("h2").textContent.toLowerCase();
        const author = product.querySelector("h4").textContent.toLowerCase();
        
        if (title.includes(searchTerm) || author.includes(searchTerm)) {
          product.style.display = "flex";
        } else {
          product.style.display = "none";
        }
      });
    });
  }
});
