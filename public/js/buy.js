// Fetch all products and display related ones
fetch(`${window.location.origin}/api`)
  .then(res => res.json())
  .then(products => {
    // Get current product details
    const currentName = document.querySelector(".product-name").innerText.trim();
    const currentType = document.querySelector(".product-name").dataset.type?.trim().toLowerCase();

    const parent = document.getElementById("related-products");

    // Filter related products by type
    const related = products.filter(
      p => p.type && p.type.toLowerCase() === currentType && p.name !== currentName
    );

    if (related.length === 0) {
      parent.innerHTML = `<p style="text-align:center;color:#555;">No related products found.</p>`;
      return;
    }

    // Create related product cards
    related.forEach(p => {
      const div = document.createElement("div");
      div.className = "related-product";
      div.innerHTML = `
        <a href="/buy/${encodeURIComponent(p.name)}">
          <img src="${p.image}" alt="${p.name}">
        </a>
        <a href="/buy/${encodeURIComponent(p.name)}" style="color:black;text-decoration:none;">
          <p class="related-product-name">${p.name}</p>
        </a>
        <p class="related-product-price">₹ ${p.price}</p>
      `;
      parent.appendChild(div);
    });
  })
  .catch(err => console.error("Error fetching related products:", err));
