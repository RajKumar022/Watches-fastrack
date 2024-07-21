document.addEventListener('DOMContentLoaded', () => {
  const productDetailContainer = document.getElementById('product-detail');
  const backButton = document.getElementById('back-button');

  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Fetch product data
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      const product = data.watches.find(watch => watch.id == productId);
      if (product) {
        showProductDetail(product);
      } else {
        productDetailContainer.innerHTML = '<p>Product not found.</p>';
      }
    })
    .catch(error => console.error('Error fetching product:', error));

  // Function to show product details
  function showProductDetail(product) {
    productDetailContainer.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Price: ₹${product.price.newPrice}</p>
      <p>Discount: ₹${product.price.discount}</p>
      <p>Rating: ${product.rating}</p>
      <p>Type: ${product.watchType}</p>
      <p>Brand: ${product.brand}</p>
      <p>Model: ${product.model}</p>
    `;
  }

  // Back button click event
  backButton.addEventListener('click', () => {
    window.location.href = "./watch.html";
  });
});
