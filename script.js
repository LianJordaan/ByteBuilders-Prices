document.addEventListener('DOMContentLoaded', function() {
  const ramSlider = document.getElementById('ramSlider');
  const threadSlider = document.getElementById('threadSlider');
  const storageSlider = document.getElementById('storageSlider');
  const ramValue = document.getElementById('ramValue');
  const threadValue = document.getElementById('threadValue');
  const storageValue = document.getElementById('storageValue');
  const price = document.getElementById('price');

  // Pricing logic (modify as needed)
  function calculatePrice() {
      const ramPrice = parseFloat(ramSlider.value) * 0.5; // $0.5 per GB
      const threadPrice = (parseFloat(threadSlider.value) - 1) * 5; // $5 per thread
      const firstThreadPrice = 3; // $3 for first thread
      const storagePrice = ((parseFloat(storageSlider.value) - 5)/5) * 0.5; // $0.5 per 5GB after the first 5GB
      const totalPrice = ramPrice + threadPrice + firstThreadPrice + storagePrice;
      price.textContent = totalPrice.toFixed(2);
  }

  // Update pricing when sliders change
  ramSlider.addEventListener('input', () => {
      ramValue.textContent = `${ramSlider.value} GB`;
      calculatePrice();
  });

  threadSlider.addEventListener('input', () => {
      threadValue.textContent = threadSlider.value;
      calculatePrice();
  });

  storageSlider.addEventListener('input', () => {
      storageValue.textContent = `${storageSlider.value} GB`;
      calculatePrice();
  });

  // Initial calculation
  calculatePrice();
});
