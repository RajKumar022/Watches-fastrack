document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.getElementById('product-cards');

  // Fetch product data
  fetch('./data.json')
    .then(response => response.json())
    .then(data => createProductCards(data.watches))
    .catch(error => console.error('Error fetching products:', error));

  // Function to create product cards
  function createProductCards(watches) {
    watches.forEach(watch => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${watch.imageUrl}" alt="${watch.name}" class="card-image">
        <h3>${watch.name}</h3>
        <p>Price: ₹${watch.price.newPrice}</p>
        <p>Rating: ${watch.rating}</p>
        <p>${watch.watchType}</p>
      `;
      card.addEventListener('click', () => {
        window.location.href = `./Details.html?id=${watch.id}`;
      });
      cardsContainer.appendChild(card);
    });
  }
});
