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
      const ramPrice = parseFloat(ramSlider.value) * 0.30; // $0.30 per GB
      const threadPrice = (parseFloat(threadSlider.value) - 1) * 0.75; // $0.75 per additional thread
      const firstThreadPrice = 0.75; // $0.75 for the first thread
      const storagePrice = ((parseFloat(storageSlider.value) - 10) / 10) * 0.50; // $0.50 per 10GB after the first 10GB

      // Set base prices for initial resources
      const basePrice = 1.00; // Base price for minimum resources

      const totalPrice = basePrice + ramPrice + threadPrice + firstThreadPrice + Math.max(storagePrice, 0);

      // Apply 50% discount
      const discountedPrice = totalPrice * 0.50;
      
      price.textContent = discountedPrice.toFixed(2);
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
